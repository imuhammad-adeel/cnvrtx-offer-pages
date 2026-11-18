/**
 * Shared by every form that posts to a GHL inbound webhook.
 *
 * FIELDS lists exactly what each webhook's workflow maps, in the names it expects.
 * payload() sends those and nothing else, so a hidden helper field can never leak into GHL.
 * Change a name here only together with the workflow in GHL.
 */
const SOURCE = ['rep', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid', 'fbclid', 'landing', 'referrer'];

export const FIELDS = {
  audit: ['business_name', 'website', 'primary_service', 'email', 'phone', 'monthly_inquiries', 'send_calculator_numbers', 'landing_page', 'opened_from', 'calc_estimate', ...SOURCE],
  reserve: ['billing_interval', 'plan_interest', 'first_name', 'business_name', 'email', 'phone', 'landing_page', 'calc_estimate', ...SOURCE, 'sms_account_consent', 'sms_marketing_consent'],
  waitlist: ['trade', 'business_name', 'email', 'landing_page', 'rep'],
  onboarding: ['email', 'shop', 'svc', 'hours', 'phone', 'notes', 'access'],
} as const;

/** The honeypot: off screen, never filled by a person. */
export const HONEYPOT = 'company_website';

/** A filled honeypot means a bot: the form then behaves as if it was sent, and sends nothing. */
export const isBot = (form: HTMLFormElement): boolean => Boolean(form.querySelector<HTMLInputElement>(`input[name="${HONEYPOT}"]`)?.value);

/** multipart/form-data with exactly the listed fields. Several ticks of one name are joined with commas. */
export function payload(form: HTMLFormElement, fields: readonly string[]): FormData {
  const all = new FormData(form);
  const out = new FormData();
  for (const name of fields) {
    out.append(
      name,
      all
        .getAll(name)
        .map((v) => String(v).trim())
        .filter(Boolean)
        .join(', '),
    );
  }
  return out;
}

/** Sends it. mode 'no-cors': the webhook's reply cannot be read, only whether the request left. */
export const send = (url: string, form: HTMLFormElement, fields: readonly string[]) => fetch(url, { method: 'POST', body: payload(form, fields), mode: 'no-cors' });

/**
 * The buyer's own email, first name and phone, kept in this browser only so the next step
 * (checkout, then onboarding) can fill them in. Never put in an address.
 */
const BUYER = 'cx_buyer';
export type Buyer = { email?: string; first_name?: string; phone?: string };
export function saveBuyer(b: Buyer): void {
  try {
    sessionStorage.setItem(BUYER, JSON.stringify(b));
  } catch {
    /* no storage: the next step asks again */
  }
}
export function readBuyer(): Buyer {
  try {
    return JSON.parse(sessionStorage.getItem(BUYER) || '{}') as Buyer;
  } catch {
    return {};
  }
}

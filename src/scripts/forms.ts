/**
 * Shared by every form that posts to a public webhook.
 * A filled honeypot field means a bot: the form then behaves as if it was sent, and sends nothing.
 */
export const isBot = (form: HTMLFormElement): boolean => Boolean(form.querySelector<HTMLInputElement>('input[name="hp_field"]')?.value);

/**
 * Settings for the main site, https://cnvrtx.com.
 * Prices, allowances and legal details are NOT here: they come from src/config/offerV9.ts,
 * the same file the checkout pages use, so the two sites can never disagree.
 *
 * RULES
 * - '' means "not set yet". The page leaves that part out. Nothing is invented.
 */
import { offerV9, featuredPlan } from '../../src/config/offerV9';
import { automotiveOffer } from '../../src/config/automotiveOffer';

export const site = {
  origin: 'https://cnvrtx.com',
  name: 'CNVRT X',
  legalName: automotiveOffer.brand.legalName,
  product: 'CNVRT X Front Office',

  /**
   * THE LAUNCH SWITCH. false = every page tells Google not to index it.
   * Turn it to true only when the launch gate in docs/cnvrtx-site-proposal.md has passed
   * and the owner has said yes.
   */
  indexing: false,

  /** Google Search Console verification code (the content="" value of the meta tag). '' = not added. */
  searchConsoleVerification: '',
  /** Google Tag Manager container, for example 'GTM-XXXXXXX'. '' = no analytics tag. */
  gtmContainerId: automotiveOffer.analytics.gtmContainerId as string,

  /** Checkout lives on get.cnvrtx.com. One page per industry. */
  checkout: {
    annual: `${offerV9.checkoutPath}?plan=annual`,
    monthly: `${offerV9.checkoutPath}?plan=monthly`,
  },

  /**
   * Who stands behind the guides. Real details only.
   * `reviewer` is the person who checked a guide before it went live; '' = the line is left out.
   */
  author: { name: 'CNVRT X', url: '/about', reviewer: '', reviewerRole: '' },

  /** Real contact details. With none set, the contact page is not generated at all. */
  contact: offerV9.contact,
};

export const hasContact = Boolean(site.contact.email || site.contact.phone || automotiveOffer.contactUrl);
export const contactUrl = automotiveOffer.contactUrl as string;

export const money = (n: number) => '$' + n.toLocaleString('en-US');
export const price = {
  monthly: money(featuredPlan.monthly),
  annual: money(featuredPlan.annual),
  kit: money(featuredPlan.launchKit),
  website: money(offerV9.website.addOn),
};
export const textingHours = offerV9.textingHours;

/** Absolute address of a path on this site, with no slash at the end. */
export const abs = (path: string) => site.origin + (path === '/' ? '/' : path.replace(/\/$/, ''));

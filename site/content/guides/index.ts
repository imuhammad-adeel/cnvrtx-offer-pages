/** Every finished guide, in the order they are listed. Add a guide here only when it is complete. */
import type { Guide } from './types';
import { guide as ceramic } from './ceramic-coating-quote-follow-up';
import { guide as ppf } from './ppf-quote-follow-up';
import { guide as tint } from './window-tint-quote-follow-up';
import { guide as detailing } from './detailing-estimate-follow-up';
import { guide as leadTime } from './auto-detailing-lead-response-time';
import { guide as noShow } from './detailing-no-show-policy-and-reminders';

export const allGuides: Guide[] = [ceramic, ppf, tint, detailing, leadTime, noShow];

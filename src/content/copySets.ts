/**
 * Which wording a shared section uses.
 *   'auto'  : the auto-shop wording (automotiveCopyV9.ts). The default everywhere.
 *   'local' : the general wording for any local business (localCopy.ts), used by the home page.
 * A section takes a `copy` prop and reads its text through copyFor(copy), so the design
 * is one set of components and only the words change.
 */
import * as v9 from './automotiveCopyV9';
import { doorCommon, gears } from './automotiveDoors';
import { doorPageCommon } from './automotiveDoorPages';
import * as local from './localCopy';

export type CopySet = 'auto' | 'local';

const auto = { ...v9, doorCommon, doorPageCommon, gears };
const general: typeof auto = {
  ...auto,
  hero9: local.hero9,
  audit9: local.audit9,
  numbers9: local.numbers9,
  about9: local.about9,
  pipe9: local.pipe9,
  leaks9: local.leaks9,
  stack9: local.stack9,
  work9: local.work9,
  hire9: local.hire9,
  day9: local.day9,
  sheet9: local.sheet9,
  voice9: local.voice9,
  hooks9: local.hooks9,
  gears: local.gears,
  math9: local.math9,
  offer9: local.offer9,
  plans9: local.plans9,
  start9: local.start9,
  faq9: local.faq9,
  exit9: local.exit9,
  footer9: local.footer9,
  doorCommon: local.doorCommon,
  doorPageCommon: local.doorPageCommon,
};

export const copyFor = (set: CopySet = 'auto'): typeof auto => (set === 'local' ? general : auto);

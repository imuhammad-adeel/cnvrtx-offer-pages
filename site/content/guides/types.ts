/**
 * A guide is a working document, written as a list of blocks. One template renders them
 * all (site/pages/auto/guides/[guide].astro), so every guide looks and behaves the same.
 *
 * WRITING RULES
 * - Answer the question first. No hard sell near the top.
 * - Service-specific. If a guide would read the same with the service name swapped, do not write it.
 * - Example schedules, numbers and messages are labelled as examples for the shop to adjust.
 * - A fact that needs support gets a source. No invented statistics, customers or results.
 * - What CNVRT X does is described only as the approved offer copy describes it.
 * - No em dashes. Short plain sentences.
 * Text fields may contain simple inline HTML: <a>, <strong>, <em>.
 */
import type { GuideMeta } from '../directory';

export type Block =
  | { h2: string; id: string }
  | { h3: string }
  | { p: string }
  | { ul: string[] }
  | { ol: string[] }
  /** The direct answer, shown in a dark box at the very top. */
  | { answer: string }
  /** An example schedule. `d` is the day or time, `ch` the channel. */
  | { timeline: { d: string; t: string; x: string; ch?: string }[] }
  /** If this, then that. */
  | { flow: { if: string; then: string }[] }
  /** A message the reader can copy. */
  | { tpl: { label: string; ch: string; text: string; note?: string } }
  | { check: string[] }
  /** 'sys' = how CNVRT X runs this step. 'warn' = a caution. */
  | { call: string; kind?: 'sys' | 'warn' }
  | { table: { head: string[]; rows: string[][] } }
  | { sources: { t: string; url: string }[] };

export type Guide = GuideMeta & {
  /** The H1 when it should differ from the title tag. */
  h1?: string;
  /** One or two sentences under the H1. */
  intro: string;
  blocks: Block[];
  /** Related guide slugs, closest first. */
  related: string[];
};

/** Shared, short wording so the consent rules read the same in every guide. */
export const consentLine =
  'Only text people who agreed to get texts from your shop, send during reasonable hours, and stop the moment someone replies STOP. Email is the fallback for everyone else.';

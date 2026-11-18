# Prompts and build notes: what is still switched off

Four things on the site are built but switched off, because each needs something created inside GoHighLevel first. For each one this file gives:

1. what has to exist in GoHighLevel,
2. a prompt to paste into AI Studio,
3. what to send back to Claude so it can be switched on in the site.

The site pages themselves are never edited in AI Studio. They are generated from the Astro project and overwritten on every sync. AI Studio is only asked to create things in the GoHighLevel account and to hand back links.

Not verified: whether AI Studio can create products, order forms and Voice AI agents by prompt in your account. If it answers that it cannot, the manual steps under each prompt do the same job.

---

## 1. Checkout

The checkout is built inside AI Studio with AI Studio Payments and the existing HighLevel products. The flow, the three page addresses and the prompt are in [ai-studio-checkout-prompt.md](ai-studio-checkout-prompt.md).

---

## 2. Voice demo (currently off)

**Now:** the "Meet your new front desk" section shows a written example conversation. The live demo is off because no agent exists yet.

**Needed in GoHighLevel:** one Voice AI agent for a made-up example shop, plus its web widget embed code.

### Prompt for AI Studio

```text
Do not change any page or file of this site. I need a Voice AI agent created in my GoHighLevel account and its web widget embed code returned to me.

Create a Voice AI agent named "CNVRT X Demo Front Desk" for a fictional business called "Example Auto Studio" (detailing, ceramic coating, PPF and window tint). It is a public demo on a sales page, so:

Rules the agent must follow:
- Open with: "Thanks for calling Example Auto Studio. I'm the shop's AI assistant. How can I help?"
- If asked whether it is a person, say it is an AI assistant.
- Never quote a price. Say: "I can't quote prices, but I can get you an exact quote from the shop."
- Offer a free inspection and suggest two example times.
- If the caller asks for the owner, take a name and number and say the owner will call back.
- Do not create real appointments, contacts or follow-ups from demo calls.
- Do not ask for or repeat personal details beyond a first name.
- End the call at 3 minutes with a polite goodbye.
- Languages: English and Spanish.

Knowledge for the agent (fictional):
- Hours: Monday to Saturday, 8 AM to 6 PM.
- Services: detailing, ceramic coating, paint protection film, window tint.
- Free inspection takes 15 minutes.

When done, give me the web widget embed code for this agent. If you cannot create any part of this, tell me exactly which part and stop.
```

### If AI Studio cannot do it

In GoHighLevel: AI Agents → Voice AI → create an agent with the rules above, then open its web widget settings and copy the embed code.

### Send back to Claude

The embed code. Claude puts it in `src/config/offerV9.ts` (`voiceDemo.embed`), sets `voiceDemo.enabled: true`, checks the call starts and ends on phone and desktop, and syncs both repos.

### Brief for Claude (the build on the site side)

- File: `src/components/automotive-v9/Voice9.astro`. It already renders the live demo when `cfg.voiceDemo.enabled && cfg.voiceDemo.embed`; otherwise it shows the written example.
- Wording for the live states is already in `voice9` in `src/content/automotiveCopyV9.ts` (`idle`, `onCall`, `afterCall`, `limit`, `fabLive`) and its general version in `src/content/localCopy.ts`.
- The embed is third-party script: load it only after the visitor presses "Start talking", never on page load, so it does not slow the page.
- The site is auto-first, so one auto demo agent covers the home page and all twelve problem pages. The general page at `/local` is not published and keeps the written example.
- Check: call connects, the 3-minute limit is stated, the mic permission prompt is explained, and nothing is recorded as a real lead.

---

## 3. Lead forms

Connected. The reserve, onboarding, audit and waitlist forms each POST to their own GHL inbound webhook. The addresses are in `endpoints` in `src/config/automotiveOffer.ts`, and the exact field names each one sends are in `src/scripts/forms.ts`. "Email me my numbers" opens the audit form, so there is no separate form for it.

---

## 4. Details only you can supply

These are left off the live site until they are real. Nothing is invented in their place.

| Needed | Where it shows | Goes in |
| --- | --- | --- |
| Support email, phone, business address | Footer, "Who's behind CNVRT X", legal pages | `offerV9.contact`, `offerV9.legalInfo` |
| Founder name, role, photo, a few lines | "Who's behind CNVRT X" | `offerV9.about` |
| 60 to 90 second walkthrough video of the real owner app, inbox and run sheet | "Who's behind CNVRT X" | `offerV9.about.videoUrl` |
| Written permission from the auto shop's owner to mention the shop | "Who's behind CNVRT X" | `offerV9.about.story.approved` |
| Lawyer review of the five legal pages | Legal pages | `offerV9.legalInfo.reviewed` |
| State the company is registered in | Terms of Service | `offerV9.legalInfo.governingState` |

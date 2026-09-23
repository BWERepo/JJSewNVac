This project uses standard prompts stored in "Z:\\Backup\\Websites\\Claude\\StandardPrompts.md"

# J & J Sew N Vac — website redesign prototype

A Business Web Express **sales prototype** for J & J Sew N Vac (Knoxville, TN), built to show the owner a
modern redesign of https://www.jjsewnvac.com. It is not the business's live site.

- Production: https://jjsewnvac.businesswebexpress.com (Worker `jjsewnvac`). Released only through `/BWEJJSCheckpoint`.
- Staging: https://jjsewnvac-staging.businesswebexpress.com (Worker `jjsewnvac-staging`). Deploy after every change with a patch bump in `version.json`.
- **After every deploy, always show the live URL** (staging and/or production) in the reply.
- Both send `X-Robots-Tag: noindex` (`public/_headers`) so the prototype never competes with J & J's real site in search.

## Stack
React 19 + TypeScript + Vite, `react-router`, hand-written CSS (no Tailwind), and self-hosted fonts (Young Serif + Figtree).
It's a static-assets-only Cloudflare Worker (`wrangler.jsonc`, SPA fallback) with no backend.

**The folder name contains `&`, which breaks npm's Windows `.bin` shims.** The npm scripts therefore call the tools as
`node node_modules/<pkg>/...`. Keep it that way. Use `npm run build`, `npm run preview` and `npm run deploy:staging`.

## Layout
- `src/data/`: all business facts (`business.ts`), navigation, classes, reviews and photo credits. **Every fact must come
  from jjsewnvac.com.** Don't invent prices, reviews, dates, staff or policies.
- `src/sections/`: homepage sections. `src/pages/`: Home, Sewing, ClassesEvents, Vacuums, Visit.
- `src/components/`: site chrome, including PrototypeBar, Header, Footer, MobileActionBar, FeedbackButton, the Modal and
  PrototypeNotice. `usePrototypeNotice()('Feature name')` is how any non-functional action is handled.
- `public/images/`: Unsplash photos downloaded and resized by `scripts/fetch-images.py` (`npm run images`).

## Design (cinematic direction, chosen 2026-09-23)
Deep night-navy with full-bleed photography, and gold thread (`--accent`) for rules, stitches and primary buttons.
J & J's red is **logo only**, shown on a white sewn-on label. The home page's centerpiece is the sticky scroll story
(`StoryScroll`). Interactive features are the Machine Finder and the class calendar. Tokens are in
`src/styles/tokens.css`. Don't drift back toward a white-and-red look: the user rejected it as too close to J & J's
current site.

## Prototype rules
The site must never process payments, take real registrations, claim live inventory or send form data. The contact form
validates, then shows the prototype notice. The Joy of Sewing event hides itself after Oct 17 2026 (`isEventUpcoming`).

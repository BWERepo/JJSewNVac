# J & J Sew N Vac Prototype: Project Status

Last updated: 2026-09-23.

**Status:** **v0.3.0 is live on both environments.** Staging and production match `main`, with nothing undeployed.
- Production: https://jjsewnvac.businesswebexpress.com (Worker `jjsewnvac`, Version ID `f1476a21-08eb-4e13-a90d-c489a9573b7c`).
- Staging: https://jjsewnvac-staging.businesswebexpress.com (Version ID `cf93b396-f81d-41c8-8afa-12644023b16d`).
- Repo: https://github.com/BWERepo/JJSewNVac (`main`).

## 2026-09-23: session summary (resume here)
All of this happened in one session.
1. **Setup:**
   - Loaded the standard prompts and mirrored the skills folder C:→Z:. `/BWEBackupSkills` now targets
     `Z:\Backup\Websites\Claude\.claude\skills`.
   - Installed the frontend-design plugin.
   - Created the project skills `/BWEJJSBegin`, `/BWEJJSCheckpoint`, `/BWEJJSEnd` and `/BWEJJSAll`.
2. **First build (v0.1.1):** a white-and-red editorial prototype built from the user's full spec. The user said it looked
   too much like J & J's current site.
3. **Cinematic redesign (v0.1.2):** see the section below.
4. **Releases:**
   - `/BWEJJSCheckpoint` shipped v0.2.0. This was the first production deploy, so it had no rollback target.
   - `/BWEJJSAll` shipped v0.3.0, with production's rollback target recorded as v0.2.0 `9f11d075`. The v0.3.0 release
     only bumped the version; there were no code changes after v0.2.0.
5. **Standing preferences set this session:**
   - Always show the live URL after any deploy.
   - Staging-only for ordinary changes, with a patch bump each time.
   - Production only via `/BWEJJSCheckpoint` or `/BWEJJSAll`.

**Suggested next steps** (nothing is blocking):
- Get the user's or owner's feedback on the cinematic direction.
- If J & J publishes new class dates, add them to `calendarEvents` in `src/data/classes.ts`. The Joy of Sewing event
  (Oct 16–17 2026) drops off the home "upcoming" logic after Oct 17. The calendar still shows it in October.

## 2026-09-23: cinematic redesign (v0.1.2)
The user said v0.1.1 looked too similar to J & J's current white-and-red site. After three questions they chose:
- **Direction:** cinematic scroll.
- **New features:** Machine Finder quiz and class calendar.
- **Red:** limited to the logo only.

What changed:
- **Palette** (`src/styles/tokens.css`): deep night-navy (`--night`) with a gold thread accent (`--accent`, plus `--accent-ink`
  for gold text on light backgrounds). Red (`--red`) is now used only by the logo, which sits on a white "sewn-on label"
  (`.logo` in `chrome.css`).
- **Header:** transparent over photo heroes (`OVERLAY_PATHS` in `Header.tsx`), solid and blurred once scrolled.
- **Home order:** Hero (full-screen photo with slow drift) → **StoryScroll** (`sections/StoryScroll.tsx`: numbered
  chapters 01–04, with a sticky photo stage that cross-fades via IntersectionObserver; on phones each chapter shows its own
  photo) → LocalStory → **MachineFinder** → Classes with **ClassCalendar** → Brands (dark) → Service → Reviews → Visit →
  Final CTA.
- **MachineFinder** (`sections/MachineFinder.tsx`, logic in `data/machineFinder.ts`): 3 questions lead to a machine
  *category* plus the brands J & J carries for it. It never names models or prices, except the Designer Epic 3, which J & J
  features on its own site. It also appears on /sewing.
- **ClassCalendar** (`components/ClassCalendar.tsx`): month view with filter buttons (All, Sewing, Embroidery,
  Quilting). It reads `calendarEvents` in `data/classes.ts`, where only confirmed dates belong, and opens on the month of
  the next event. It's used on home and on /classes (which no longer has the separate event card).
- **Interior pages:** `PageHero` is now a full-bleed dark photo hero.
- **Removed:** the old CategoryGrid, SewingFeature and VacuumTransition sections, and the unused `sewing-hands` and
  `thread-spools` photos.
- **Screenshot tooling:** real-viewport screenshots used puppeteer-core with the installed Chrome, from the session
  scratchpad. Chrome's headless CLI can't scroll and has a ~500px minimum width, so it can't test this layout.

## What exists (original build, still accurate except where the redesign above changed it)
- **Home:** hero (a "sewn-in label" panel over a quilt photo), a "What Brings You In Today?" photo mosaic, the local story
  with 50+/Local/Hands-On, the brands list, the sewing machine feature, classes (with the real Joy of Sewing event plus
  recent-class examples), the vacuum transition, service, genuine Google reviews, visit (live open/closed status, hours,
  Google map, directions) and the final CTA.
- **/sewing:** machine types, the Designer Epic 3 spotlight, brand detail, quilting, fabrics & notions, the lifetime-classes
  band and machine service.
- **/classes:** the upcoming event (auto-hides after Oct 17 2026), the recent-class list, and how classes work.
- **/vacuums:** Miele/Lindhaus panels, buying guidance, vacuum types, bags & filters, and repair.
- **/visit:** visit details plus a contact form (it validates and then shows the prototype notice; nothing is sent).
- Chrome: the prototype bar, a sticky header with dropdowns, the mobile menu, the mobile Call/Directions/Classes bar, the
  desktop-only "Like this direction?" modal, and the footer.

## Verified sources (jjsewnvac.com, checked 2026-09-23)
- **Contact and hours:** address, phone and hours.
- **Business claims:** "family-owned 50+ years", "Top 10 Husqvarna dealership in the area for 15 years", lifetime classes
  with machine purchase, machine warranty, in-store repair, lifetime vacuum warranty, special orders, and shipping on some
  products.
- **Brands:** the six brands.
- **Classes and event:** class titles, costs and policies, plus the Joy of Sewing event details.
- **Reviews:** the 7 Google reviews shown on their homepage (5 are used, lightly shortened).

## Placeholder / prototype-only
- **Photos:** Unsplash stock (none show J & J staff or their store).
- **Brand treatments:** typographic only, no official logos.
- **Features that open the prototype notice:** online fabric shop, online service request, online event registration,
  online bag/filter ordering and contact form submission.
- **Classes:** only the Joy of Sewing event has real current dates. The other classes are labeled as recent examples.

## Open items
- **Repo:** https://github.com/BWERepo/JJSewNVac (`main`). The user created it by hand because the `gh` CLI isn't
  installed.
- **Production:** deploy with `/BWEJJSCheckpoint` after the user reviews staging.

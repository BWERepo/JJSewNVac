# J & J Sew N Vac Prototype: Project Status

Last updated: 2026-09-23 (first session).

**Status:** the prototype is built and live on **staging** at https://jjsewnvac-staging.businesswebexpress.com (**v0.1.1**,
Version ID `f8e99366-702d-4779-824e-85f8ae4300ad`). **Production** (https://jjsewnvac.businesswebexpress.com) has **not**
been deployed yet. The user chose staging-only until they review it, then `/BWEJJSCheckpoint`.

## What exists
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

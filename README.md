# WTC design system

The Waimairi Tennis Club's logos, colours, type, spacing, icons and (soon) components, in one place, so the website and anything else the club builds look the same.

## What's here

| Folder | What it is |
|---|---|
| `tokens/tokens.css` | Every colour, font, spacing and text size as CSS variables. **The single source of truth**: change a value here and it changes everywhere that uses it. |
| `assets/logos/` | Club logos (SVG) |
| `assets/icons/` | Icons used on the website (SVG) |
| `components/` | Button, IconButton, Avatar, EventCard, NewsCard, PersonCard and MembershipCard: plain CSS in `components.css` (classes start `wtc-`), plus Astro components that write the markup |
| `src/` | The reference site that shows all of the above |

## Look at it

```bash
npm install
npm run dev
```

Then open http://localhost:4322.

## Roadmap

1. ✅ Foundations: logos, colours, type, spacing, icons (copied from the website, 30 Oct 2026)
2. Components: ✅ Button, Icon button, Avatar, Event, News, Person and Membership cards (30 Oct 2026). Next: info box, page hero, banners, header, footer. Each is rebuilt one at a time without the old Webflow styling, with the website switching to each in turn
3. When someone else needs it: a Canva brand kit, and a package other projects can install

The website (`waimairi-tennis-club/wtc-website`) still has its own copy of `tokens.css` until step 2 connects the two.

# saziatahosin.github.io

Personal research portfolio of **Mst. Sazia Tahosin**. Plain HTML/CSS/JS, so there's nothing to build or install.

Research: explainable & federated AI for medical imaging, women’s and child health, and satellite-based drought monitoring.

```
index.html          Home: animated hero, live stats, featured papers, journey
research.html       Research areas, approach, toolkit
publications.html   Full list with filters, search, sort, live citation counts
about.html          Bio, education, experience, languages
contact.html        Contact links
assets/style.css    Design (colours, fonts, animations)
assets/main.js      Shared menu/footer, links, animations  ← edit PROFILE links here
assets/pubs.js      Publications: live OpenAlex sync + fallback list
assets/logo.svg     Logo (also favicon.svg)
cv.pdf              Downloadable CV
```

## Publish on GitHub Pages (about 10 minutes)
1. Sign in to GitHub as **saziatahosin** → **New repository** → name it exactly `saziatahosin.github.io` → **Public** → Create.
2. **Add file → Upload files**. Drag in *everything* from this folder, including the `assets` folder. Commit.
3. **Settings → Pages** → *Deploy from a branch* → `main` / `(root)` → Save.
4. Live in 1–2 minutes at **https://saziatahosin.github.io**

## How the automatic updates work
Every time someone opens the site, it asks **OpenAlex** (a free, open database of research papers)
for all works linked to her ORCID `0009-0006-2027-7148`, plus her citations, h-index and i10-index.
- A new paper appears automatically once OpenAlex indexes it (usually days to a few weeks after publication).
- Citation counts and h-index update the same way.
- If OpenAlex is down, the site shows the saved list in `assets/pubs.js`.

**To keep it working:**
- Make sure every new paper is on her **ORCID** (ORCID → Works → Add → Search & link → Crossref). OpenAlex uses ORCID to match papers to her.
- Papers **under review** aren't in OpenAlex: add them to `FALLBACK` in `assets/pubs.js` with `type:"review"`.
  When they're published, they'll appear automatically and you can delete them from FALLBACK.
- To pin a paper to the home page, add it to FALLBACK with its DOI and `featured:true`.

Google Scholar has no public API and blocks automated access, so it can't feed the site directly.
OpenAlex numbers are usually close to Scholar's but not identical.

## Show or hide the CV
The CV buttons are **hidden** for now. To turn them on, open `assets/main.js` and change
`const SHOW_CV = false;` to `const SHOW_CV = true;`, then Commit. `cv.pdf` stays in the repository either way.
Note: while hidden, the file can still be opened by anyone who types the exact address
(saziatahosin.github.io/cv.pdf). To make it fully private, delete `cv.pdf` until you need it.

## Quick edits
| Change | Where |
|---|---|
| Add a photo | upload `assets/photo.jpg`; in `index.html` and `about.html` replace `<img src="assets/logo.svg" alt="">` inside `<div class="core">` with `<img class="photo" src="assets/photo.jpg" alt="Mst. Sazia Tahosin">` |
| Email / social links | `PROFILE` at the top of `assets/main.js` |
| Rotating "Research focus" lines | the `<span>` lines inside `<div class="focus-lines">` in `index.html` |
| Floating labels around the logo | the `<div class="sat …">` lines in `index.html` |
| Colours | the `:root` block at the top of `assets/style.css` |
| New CV | replace `cv.pdf` |

# Pooya Jamshidi — Academic Website

A lightweight, mobile-friendly, tabbed academic website that works directly with GitHub Pages. Built with plain HTML, CSS and JavaScript; no framework, dependencies, or build steps.

## How to publish

1. Open [your GitHub Pages repository](https://github.com/Pooya-Jamshidi/pooya-jamshidi.github.io).
2. Upload **index.html**, **styles.css**, **script.js**, **favicon.svg**, **.nojekyll** and (optionally) this README to the **root** of the repository. You can use **Add file → Upload files**, or copy them into a local clone and push.
3. **Keep your existing `Me.jpg` and `UT.png` in the repository root.** The site uses your existing profile picture and University of Tehran logo, so those two image files are not duplicated in this ZIP.
4. Delete the old `index.md` to avoid having a second home page. The old `_config.yml` is optional and can be removed; `.nojekyll` disables Jekyll processing.
5. In GitHub, open **Settings → Pages**, confirm it deploys from the `main` branch and `/(root)` (or adapt to your existing Pages setup).
6. After GitHub Pages publishes, visit [pooya-jamshidi.github.io](https://pooya-jamshidi.github.io/). It may take a few minutes for changes to appear.

## Local preview

Open `index.html` in a browser, or run this command in the website folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. For the image to appear in a standalone local preview, copy `Me.jpg` and `UT.png` from your existing GitHub repository into the website folder.

## Update your content

- **About, publications, work history, courses, and education:** Edit `index.html`.
- **Colors, spacing, fonts, and responsive layout:** Edit the CSS variables at the top of `styles.css`.
- **Tabs, dark mode, and publication search:** Edit `script.js`.
- **Photo:** Replace `Me.jpg` in your repository (keep the same filename).

The navigation supports direct links (`#research`, `#publications`, etc.), keyboard arrow navigation, responsive layouts, and persistent dark mode. Publications are searchable. The print stylesheet expands each section to make a printable page.

## Before publishing

The academic details were adapted from the repository's existing `index.md` in October 2026. **Please review dates, job titles, manuscript submission statuses, paper URLs, GPA/awards and affiliations for accuracy and currency.** Research descriptions are intentionally broad and can be tailored further.

A few entries did not have paper URLs on the original site; those entries remain without links rather than introducing placeholder or invented downloads.

## Files

```
index.html
styles.css
script.js
favicon.svg
.nojekyll
README.md
```

The existing repository should additionally retain:

```
Me.jpg
UT.png
```

# Koulna Morocco Website

A lightweight, responsive static website for Koulna Morocco, built with HTML, CSS, vanilla JavaScript, and SVG. It is prepared for GitHub Pages.

## Contents

- `index.html` — main page, navigation, mission, focus areas, get involved, donation information, contact form
- `styles.css` — responsive styling and accessible focus states
- `script.js` — mobile navigation, contribution amount selection, contact email draft
- `assets/koulna-morocco-logo.jpg` — provided organization logo, optimized for web
- `assets/favicon.svg` — small site icon
- `.nojekyll` — tells GitHub Pages not to run Jekyll processing
- `PAYMENTS.md` — payment activation checklist

## Preview locally

Open `index.html` in a browser. For a local server, from this folder run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages

1. Download and extract the ZIP.
2. Open your GitHub repository (or create one) and upload the *contents* of this folder to the repository root. `index.html` must be at the top level, not inside an extra `koulna_morocco_website/` folder.
3. Commit the files to the `main` branch.
4. Open repository **Settings → Pages**.
5. Under build/deployment, choose **Deploy from a branch**, then select branch `main` and folder `/(root)`, and save. If your repository uses a different deployment setup, follow its Pages configuration.
6. Wait for the Pages deployment to finish. The URL is shown on the Pages settings page. Open it on desktop and phone and test all navigation, social links, email links, and the contact form.
7. If you see a 404: verify `index.html` is in the published root, the Pages source/branch/folder is correct, the latest commit finished deploying, and the URL matches the repository or custom domain. Allow a few minutes after changing settings.
8. To add a custom domain later, enter it under **Settings → Pages → Custom domain** and save. Configure the DNS at your domain registrar exactly as GitHub's current documentation specifies for your domain type (typically a `CNAME` for a subdomain, or GitHub Pages A/AAAA records for an apex domain). Add the domain file/settings as requested by GitHub, wait for DNS propagation, then enable **Enforce HTTPS** when available. Avoid pointing the domain at an unrelated server.

## Donation status

The website does **not** currently accept online card payments. The donation interface is deliberately transparent: selecting an amount does not charge anyone, and the Donate Now button explains that hosted checkout has not been configured. See `PAYMENTS.md` before enabling contributions.

## Contact form

The form uses `mailto:` to open the visitor's default email application with a prepared draft. It does not have a backend and does not send or store messages itself. If the visitor has no email app configured, they can email `koulnamorocco@gmail.com` directly.

## Brand and content

The uploaded Koulna Morocco logo is included as supplied. The focus areas are described as intended goals, not completed projects. Review all public copy and contribution details before launch.

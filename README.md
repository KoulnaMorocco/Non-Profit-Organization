# Koulna Morocco Website

Responsive website with a Stripe-hosted Checkout donation flow. The static site and `/api/create-checkout-session` serverless function are designed for deployment to Vercel (not GitHub Pages alone). The function creates one-time USD Checkout Sessions for donor-entered amounts.

## Required before going live

1. Deploy this project to Vercel.
2. In Vercel Project Settings → Environment Variables, add `STRIPE_SECRET_KEY` using the key for the intended Stripe mode. Never put the secret key in website JavaScript or commit it to GitHub.
3. Add `SITE_URL` with the exact public HTTPS origin, e.g. `https://your-domain.example` (no trailing slash).
4. Start with a Stripe test secret key and test successful checkout, cancellation, mobile layout, and receipts. Use a live key only after the account holder has completed Stripe verification and confirmed they are permitted to receive these contributions.
5. Ensure the adult account manager has verified Stripe's age, identity, country, and fundraising requirements. Describe Koulna Morocco's legal/tax status truthfully; do not promise tax deductibility unless eligible.
6. Review `STRIPE_INTEGRATION_TODO.md` before launch.

## Local preview

`index.html` can be opened directly for the static page, but checkout needs the deployed serverless endpoint and configured environment variables. `npm install` installs the Stripe SDK for deployment.

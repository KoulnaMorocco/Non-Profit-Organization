# Payment activation checklist

## Status: integration added; not ready for live donations until configured and tested

This site now includes a server-side Stripe Checkout endpoint at `api/create-checkout-session.js` and a donor-entered one-time amount flow. It requires deployment to Vercel or a compatible Node serverless host. GitHub Pages alone cannot run the endpoint.

Follow [`STRIPE_INTEGRATION_TODO.md`](STRIPE_INTEGRATION_TODO.md) for the environment variables, test steps, and launch checklist. Do not put Stripe secret keys in HTML, JavaScript, or GitHub. Test in Stripe test mode before considering live payments.

Because the organizer is under 18, an eligible adult must manage the account if Stripe's terms require it. Confirm Stripe account eligibility and accurately describe Koulna Morocco's legal status and how contributions will be handled. Do not claim tax deductibility unless eligible.

The success page only confirms return from Checkout; it does not independently verify payment. Use Stripe's dashboard and receipts as payment records.

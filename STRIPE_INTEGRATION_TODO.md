# Stripe integration TODO

## Values to configure before testing

| Setting | Where | What to set |
|---|---|---|
| `STRIPE_SECRET_KEY` | Vercel project environment variables | Stripe test secret key first; use live secret only after account verification and readiness. Never expose this key in frontend code or commit it. |
| `SITE_URL` | Vercel project environment variables | Exact public HTTPS website origin, with no trailing slash. This is used for Checkout success/cancel URLs. |

## Configured parameters

File: [`api/create-checkout-session.js`](api/create-checkout-session.js)

- Hosted Stripe Checkout (`ui_mode: 'hosted'`) and one-time payments (`mode: 'payment'`).
- Customer-selected amount is validated server-side: $1.00–$10,000.00, maximum two decimal places.
- Currency: USD; product label: Donation to Koulna Morocco.
- Billing address collection: automatic.
- Phone number collection and automatic tax: disabled.
- Promotion codes: disabled.
- Success and cancellation return pages: `success.html` and `cancel.html`.

## Deployment and testing

1. Deploy the repository to Vercel; GitHub Pages cannot run the `/api` function.
2. Set the two environment variables above and redeploy.
3. Test with Stripe test mode and test card `4242 4242 4242 4242`, a future expiration date, any CVC, and a test ZIP/postal code if requested. Use only test mode for this test card.
4. Test cancellation and verify that a successful payment appears in Stripe test data. The success page itself does not verify payment; treat Stripe's dashboard/receipt as the payment record.
5. Before going live, the adult account manager must complete Stripe verification and confirm eligibility for this fundraising use. Confirm the intended use and handling of funds are accurately described on the website.
6. Switch to a live key only after test results and all legal/account requirements are reviewed.

## Flow

The donation form posts the selected amount to `/api/create-checkout-session`. The server validates the amount and creates a Stripe Checkout Session using the server-side secret key. The browser is redirected to the returned Stripe-hosted URL. Card details are entered on Stripe, not stored by this website.

## Important

This is a starting integration, not proof of successful production setup. No Stripe credentials or live domain were provided, so checkout will not work until the environment variables are configured and the project is deployed. Consider adding rate limiting/abuse controls before public launch. Do not advertise donations as tax-deductible unless the organization is eligible to do so.

# Payment activation checklist

## Current status: NOT ACTIVE

No card processor, checkout URL, API credential, or payment account has been configured. The website intentionally does not collect card numbers/CVV and the Donate Now control does not start a payment. Do not describe checkout as active until the steps below have been completed and tested.

## Recommended path: a hosted payment link

For a static GitHub Pages site, the simplest option is a legitimate hosted payment link from a provider that supports the account holder's country, organization/personal status, and intended use. Stripe Payment Links may be an option if the account is eligible; provider availability and eligibility vary by country and account type. A hosted link lets the payment provider collect card information on its own checkout page, without exposing secret credentials in this public repository.

1. Decide who is legally and practically responsible for receiving, managing, and reporting contributions. Clarify the purpose of contributions and how they will be handled before accepting money.
2. The eligible account holder should check the payment provider's current terms, country availability, identity requirements, age requirements, and rules for fundraising or nonprofit-style activity. Because the organizer is under 18, a parent/guardian or another legally eligible adult may need to open and manage the account, depending on provider rules. Do not misstate the initiative's legal status.
3. Create the provider account and complete its verification. Configure the public-facing business/initiative description and receipt/support details truthfully.
4. Create a hosted payment link for contributions. Decide whether visitors need fixed amount links (for example, $5/$10/$25/$50) or a provider-supported customer-entered amount. Check provider support for cards and any optional methods such as Venmo; availability is not guaranteed and depends on account/region/settings.
5. Configure the hosted checkout's return/success and cancellation experience if the provider offers those settings. A return page should say only that the visitor has returned from checkout; do not imply a successful payment unless confirmed by the provider.
6. Test in the provider's test/sandbox mode first. Confirm declined payments, successful test payments, cancellation/return, mobile behavior, receipts, and account records. Then run a carefully controlled live test only when the account holder is ready.
7. Only after the link is verified, update the donation form in `index.html` and `script.js` so Donate Now opens the actual provider-hosted URL. Never put secret API keys in HTML, JavaScript, or the GitHub repository.

## If using Stripe Checkout with a custom amount

A custom Checkout Session generally requires a server-side endpoint (for example, a small serverless function) to validate the amount and create the session with a secret key. GitHub Pages cannot run that backend. Use a reputable serverless host and store the secret key in its environment variables, never in the website source. The endpoint should validate amounts, currency, allowed payment methods, rate limits, and return URLs. Only redirect to a checkout session URL created by the trusted server. This requires extra implementation and testing beyond this static site.

## Venmo

The website includes the supplied intended profile URL: https://venmo.com/u/koulnamorocco. The page has not verified account ownership or confirmed that the profile accepts contributions. Verify it while signed in before publishing or promoting it. Venmo availability and account eligibility may depend on age, account type, and current terms.

## Important transparency

Koulna Morocco is presented as a developing initiative, not as a registered charity or 501(c)(3). The website does not claim contributions are tax-deductible. Before accepting money, publish clear and accurate details about the intended use, who receives/holds the funds, and how updates or questions will be handled. Do not promise specific impact or fund allocation unless it is true and documented.

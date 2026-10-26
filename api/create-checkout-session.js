const Stripe = require('stripe');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return res.status(503).json({ error: 'Donations are not configured yet.' });
  }

  const amount = Number(req.body && req.body.amount);
  if (!Number.isFinite(amount) || amount < 1 || amount > 10000) {
    return res.status(400).json({ error: 'Choose an amount between $1 and $10,000.' });
  }

  const cents = Math.round(amount * 100);
  if (Math.abs(cents / 100 - amount) > 0.000001) {
    return res.status(400).json({ error: 'Enter an amount with no more than two decimal places.' });
  }

  try {
    console.log(
  'Stripe key mode:',
  process.env.STRIPE_SECRET_KEY?.startsWith('sk_live_')
    ? 'LIVE'
    : process.env.STRIPE_SECRET_KEY?.startsWith('sk_test_')
      ? 'TEST'
      : 'UNKNOWN'
);
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const origin = process.env.SITE_URL;
    if (!origin || !/^https:\/\//i.test(origin)) {
      return res.status(503).json({ error: 'The website return URL is not configured.' });
    }

    const session = await stripe.checkout.sessions.create({
      ui_mode: 'hosted',
      mode: 'payment',
      billing_address_collection: 'auto',
      phone_number_collection: { enabled: false },
      automatic_tax: { enabled: false },
      allow_promotion_codes: false,
      submit_type: 'auto',
      line_items: [{
        price_data: {
          currency: 'usd',
          unit_amount: cents,
          product_data: {
            name: 'Donation to Koulna Morocco',
            description: 'Support Koulna Morocco’s charitable and educational initiatives.'
          }
        },
        quantity: 1
      }],
      success_url: `${origin}/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancel.html`
    });

    return res.status(200).json({ url: session.url });
  } catch (error) {
    console.error('Stripe Checkout session creation failed:', error.message);
    return res.status(500).json({ error: 'Could not start checkout. Please try again later.' });
  }
};

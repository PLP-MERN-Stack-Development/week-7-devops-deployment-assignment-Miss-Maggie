require('dotenv').config();
const express = require('express');
const router = express.Router();
const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


// Create a Stripe Checkout session
router.post('/create-checkout-session', async (req, res) => {
  try {
    const { priceId } = req.body;
    console.log('Received priceId:', priceId);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: [
        {
          price: price_1RgsSR00JciMELW2U3LaqlbGd, // Stripe Price ID for the product
          quantity: 1,
        },
      ],
      success_url: `${process.env.FRONTEND_URL}/payment?success=true`,
      cancel_url: `${process.env.FRONTEND_URL}/payment?canceled=true`,
    });
    res.json({ url: session.url });
  } catch (err) {
    console.error('Stripe error:', err);
    res.status(500).json({ error: err.message });
  }
});

router.get('/test', (req, res) => {
  console.log('Test route hit!');
  res.json({ message: 'Payment route is working!' });
});

module.exports = router; 
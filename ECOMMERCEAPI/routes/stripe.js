const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_KEY);

router.post('/payment', async (req, res) => {
    stripe.charges.create({
        source: req.body.tokenID,
        amount: req.body.amount,
        currency: 'usd'
    }, (stripeErr, stripeRes) => {
        if(stripeErr) {
            res.body(500).json(stripeErr);
        } else {
            res.body(200).json(stripeRes);
        }
    });
});

module.exports = router;
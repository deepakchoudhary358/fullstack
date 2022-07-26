const { json } = require('express');
const Cart = require('../models/Cart');
const { verifyToken, tokenAndPasswordVerification, verifytokenAndAdmin } = require('./verifyToken');
const router = require('express').Router();

//CREATE CART

router.post('/cart', async (req, res) => {
    const cart = new Cart(req.body);
    try {
        const savedProduct = await cart.save();
        res.status(200).json(savedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
});

// MODIFY CART
router.put('cart/:id', tokenAndPasswordVerification, async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedCart);
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE CART
router.delete('cart/:id', tokenAndPasswordVerification, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json('Cart has been deleted...');
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET USER CART
router.get('cart/find/:userId', tokenAndPasswordVerification, async (req, res) => {
    try {
        const cart = await Cart.findOne({ userID: req.params.userId });
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json(err);
    }
});


//GET ALL 

router.get('/carts', verifytokenAndAdmin, async (req, res) => {
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;


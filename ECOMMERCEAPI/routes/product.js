const { json } = require('express');
const Product = require('../models/Product');
const { verifyToken, tokenAndPasswordVerification, verifytokenAndAdmin } = require('./verifyToken');
const router = require('express').Router();


//CREATE

router.post('/product', async (req, res) => {
    const newProducts = new Product(req.body);
    try {
        const savedProduct = await newProducts.save();
        res.status(200).json(savedProduct);
    } catch (err) {
        res.status(500).json(err);
    }

});

// MODIFY PRODUCT
router.put('product/:id', verifytokenAndAdmin, async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
});


// DELETE
router.delete('product/:id', verifytokenAndAdmin, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json('Product has been deleted...');
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET PRODUCT
router.get('product/find/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err);
    }
});


// GET ALL PRODUCTS--
router.get('/products', async (req, res) => {
    const qNew = req.query.new;
    
    const qCategory = req.query.categories;
    console.log(qCategory);
    try {
        let product;
        if(qNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(2);
        } else if(qCategory) {
            products = await Product.find({
                categories: { $in: [qCategory] }
            });
        } else {
            products = await Product.find();
        }

        res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
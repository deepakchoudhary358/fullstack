const User = require('../models/User');
const { verifyToken, tokenAndPasswordVerification, verifytokenAndAdmin } = require('./verifyToken');
const router = require('express').Router();

router.put('user/:id', tokenAndPasswordVerification, async (req, res) => {
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECR_PASS).toString()
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});


// DELETE
router.delete('user/:id', tokenAndPasswordVerification, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json('User has been deleted...');
    } catch (err) {
        res.status(500).json(err);
    }
});


// GET USER
router.get('user/find/:id', verifytokenAndAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET ALL USERS
router.get('/users', verifytokenAndAdmin, async (req, res) => {
    const query = req.query.new;
    try {
        const users = query ? await User.find().sort({ _id: -1 }).limit(5) : await User.find();
        //const {password, ...others} = user._doc;
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/stats', verifytokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
    console.log(lastYear);
    try {
        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            { $project: { month: { $month: "$createdAt" } } },
            {
                $group:
                {
                    _id: "$month",
                    total: { $sum: 1 }
                }
            },
        ]);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;

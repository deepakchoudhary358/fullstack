const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('DBConnection successfull'))
    .catch((err) => console.log(err));    

app.use(express.json());
app.use('/api' , authRoute);
app.use('/api' , userRoute);
app.use('/api' , productRoute);
app.use('/api' , cartRoute);
app.use('/api' , orderRoute);

app.listen(process.env.PORT || 2524, () => {
    console.log(`Express server running at port: ${process.env.PORT}`);
});

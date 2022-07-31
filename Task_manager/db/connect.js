const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = (url) => {
return mongoose.connect(process.env.CONNECTION_STRING)
}

// mongoose.connect(process.env.CONNECTION_STRING)
//     .then(() => console.log('DBConnection successfull'))
//     .catch((err) => console.log(err)); 

module.exports = connectDB
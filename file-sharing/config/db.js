
require('dotenv').config();
const mongoose = require('mongoose');
function connectDB() {
    //Database connection 🥳
    // mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });
    // const connection = mongoose.connection;
    // connection.once('open', () => {
    //     console.log('Database connected 🥳🥳🥳🥳');
    // }).catch(err => {
    //     console.log('Connection failed ☹️☹️☹️☹️');
    // });

    mongoose.connect(process.env.CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log('DBConnection successfull'))
        .catch((err) => console.log(err));
}


module.exports = connectDB;




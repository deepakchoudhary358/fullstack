const express = require('express');
const app = express();
const router = require('./routes/files');
const show = require('./routes/show');
const connectDB = require('./config/db');
const path = require('path');
const PORT = process.env.PORT || 6000;

app.listen(PORT, async () => {
    await connectDB();
    console.log(`Listening on PORT : ${PORT}`);
});

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejb')
app.use('/api/files', router);
app.use('/files', show);

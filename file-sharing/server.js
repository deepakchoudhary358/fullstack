const express = require('express');
const app = express();
const router = require('./routes/files');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 6000;

app.listen(PORT, async () => {
    await connectDB();
    console.log(`Listening on PORT : ${PORT}`);
});

app.use('/api/files', router);

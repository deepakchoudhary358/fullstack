const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const port = process.env.PORT || 3000;
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');
const errorhandlerMiddleware = require('./middleware/error-handler');

// Middleware
app.use(express.json());
app.use(express.static('./public'));

// routes
app.get('/hello', (req, res) => {
    res.send('Task Manager');
})

app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorhandlerMiddleware);

const start = async () =>  {
    try {
        await connectDB();
        app.listen(port, () => { console.log(`App listening on port : ${port}....`) });
    } catch (error) {
        console.log(error);
    }
}

start();

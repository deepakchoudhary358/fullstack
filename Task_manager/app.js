const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const port = 3000;
const connectDB = require('./db/connect');

// Middleware
app.use(express.json());

// routes
app.get('/hello', (req, res) => {
    res.send('Task Manager');
})

app.use('/api/v1/tasks', tasks);

const start = async () =>  {
    try {
        await connectDB();
        app.listen(port, () => { console.log(`App listening on port : ${port}....`) });
    } catch (error) {
        console.log(error);
    }
}

start();

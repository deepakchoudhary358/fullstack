const router = require('express').Router();
const multer = require('multer');

let storage = multer.diskStorage({
    
});

router.post('/', (req, res) => {
    res.send('Hello World');

    // validate request
    if(!req.file) {
       return res.json({ error: 'All fields are required'});
    }
    //  store file
    // store into database
    // send respose -> Link
});

module.exports = router;


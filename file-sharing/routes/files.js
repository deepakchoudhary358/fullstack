const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const File = require('../models/files');
const { v4: uuid4 } = require('uuid');

let storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;
        cb(null, uniqueName)
    }
});

let upload = multer({
    storage: storage,
    limit: { fileSize: 100000 * 100 }
}).single('myfile');

router.post('/', (req, res) => {
  //  res.send('Hello World');

    // validate request
    
    //  store file
    upload(req, res, async (err) => {
        if(!req.file) {
            return res.json({ error: 'All fields are required'});
         }
          
        if(err) {
            res.status(500).json({error: err.message})
        }
        // store into database
        const file = new File({
            filename: req.file.filename,
            uuid: uuid4(),
            path: req.file.path,
            size: req.file.size
        });

        const response = await file.save();
        return res.json({file: `${process.env.APP_BASE_URL}/files/${response.uuid}`});
    })
    
    // send respose -> Link
});

module.exports = router;


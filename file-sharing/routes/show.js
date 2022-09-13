const router = require('express').Router();
const File = require('../models/files');



router.get('/:uuiid', async (req, res) => {
    try {
        const file = await File.findOne({uuid: req.params.uuiid});
        if(!file) {
            return res.render('download', { error: 'Something went wrong...'});
        }
        return res.render('download', {
            file: file.uuid,
            fileName: file.fileName,
            fileSize: file.size,
            downloadLink: `${process.env.APP_BASE_URL}/files/download${file.uuid}`
        });
    } catch(error) {
        return res.render('download', { error: 'Something went wrong...'});

    }
    
});


module.exports = router;
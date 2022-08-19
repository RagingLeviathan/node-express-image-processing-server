const { Router } = require('express');
const multer = require('multer');
const path = require('path');
const imageProcessor = require('./imageProcessor');

const router = Router();

const filename = (req, file, callback) => {
    callback(null, file.originalname);
};

const storage = multer.diskStorage({
    destination: 'api/uploads', 
    filename: filename,
});

const fileFilter = (req,file,callback => {
    if(file.mimetype !== 'image/png') {
        request.fileValidationError = 'Wrong file type.';
        callback(null, false, new Error('Wrong file type.'));
    } else {
        callback(null, true);
    }
});

const upload = multer({
    fileFilter: fileFilter, 
    storage: storage,
});

router.post('/upload',upload.single('photo'), (req,res) => {
    if(req.fileValidationError) {
        return res.status(400).json({error: req.fileValidationError});
    } else {
        res.status(201).json({success: true});
    }
});

module.exports = router;
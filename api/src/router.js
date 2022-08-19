const { response } = require('express');
const express = require('express');
const multer = require('multer');

const router = express.Router();

const filename = 'fish';
// (file, callback => {
//     callback(null, file.originalname);
// });

multer.diskStorage({destination: 'api/uploads', filename: filename});

// fileFilter = (req,file,callback => {
//     if(file.mimetype !== 'image/png') {
//         request.fileValidationError = 'Wrong file type.';
//         callback(null, false, {error: 'Wrong file type.'})
//     } else {
//         callback(null, true);
//     }
// });

// const upload = multer({fileFilter: fileFilter, storage: storage});

// router.post('/upload',upload.single('photo'), (req,res) => {
//     if(req.fileValidationError) {
//         response.status(400).json({error: request.fileValidationError});
//     } else {
//         response.status(201).json({success: true});
//     }
// });

module.exports = router;
'use strict';
const uploadController = require('../controllers/upload');
const express = require('express');
const router = express.Router();

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, '../../gatk-workflows/fastq_data/')
//      ""},
//     filename: function (req, file, cb) {
//       cb(null, file.originalname)
//     }
//   })

var upload = multer({ storage: storage })

router.post('/background', uploadController.background);


module.exports = router;

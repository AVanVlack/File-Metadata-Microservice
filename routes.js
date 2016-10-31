const express = require('express'),
      path = require('path'),
      multer = require('multer'),
      fs = require('fs');
const router = express.Router();
const url = require('url');
const upload = multer({dest:'./temp'})


router
  //index page
  .get('/', (req, res) => {
    res.render(path.join(__dirname, '/public/index.pug'))
  })
  //post file for details
  .post('/fileData', upload.single('upload'), (req, res, next) => {
    console.log(req.file);
    res.json({fileName: req.file.originalname, fileSize: req.file.size});
    fs.unlink(path.join(__dirname, req.file.path));
  });

module.exports = router;

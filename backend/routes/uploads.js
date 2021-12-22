const express = require('express');
const multer = require('multer');
const path = require('path');

// Set The Storage Engine
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function(req, file, cb){
    cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Init Upload
const upload = multer({
  storage: storage,
  limits:{fileSize: 10},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
}).single('myImage');

const mutiple = multer({
    storage:storage,
    limits:{fileSize:1000000},
    fileFilter:function(req,file,cb){
        checkFileType(file,cb);
    }
}).array('images',3)

// Check File Type
function checkFileType(file, cb){
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif|webp|mp3|aac|bin|mid|midi|oga|ogx|opus|wav|weba/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error:file must be  Image or audio ');
  }
}

// Init app
const app = express();


app.post('/api/v1/upload/single', (req, res) => {
  upload(req, res, (err) => {
    if(err){
     res.send({
         'msg':err
     })
    } else {
      if(req.file == undefined){
        res.send( {
          msg: 'Error: No File Selected!'
        });
      } else {
        res.send({
          msg: 'File Uploaded!'
        });
      }
    }
  });
});

app.post('/api/v1/upload/mutiple', (req, res) => {
    mutiple(req, res, (err) => {
      if(err){
       res.send({
           'msg':err
       })
      } else {
        if(req.file == undefined){
          res.send({
            msg: 'Error: No File Selected!'
          });
        } else {
          res.send( {
            msg: 'Files Uploaded!'
          });
        }
      }
    });
  });

 module.exports=app;
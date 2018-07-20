
const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

var storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'ironProject', // The name of the folder in cloudinary
  allowedFormats: ['jpg', 'png'],
  filename: function (req, file, cb) {
    cb(null, `my-file-${Math.floor(Math.random() * Math.floor(10000))}`); 
    // The file on cloudinary would have the same name as the original file name
  }
});

const uploadCloud = multer({storage});

module.exports = uploadCloud;
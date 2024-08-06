const express = require('express');
const router = express.Router();
const multer = require('multer');

storage = multer.diskStorage({
         
     destination: (req, file, cb) => {
         cb(null, 'uploads/')                    // Destination folder for uploaded files
     },
        filename: (req, file, cb) => {
            cb(null, file.originalname)              // File name after upload
           {/* cb(null,`${Date.now()}_${file.originalname}`) // File name after upload with date */}
        }
});

const upload = multer({ storage }).single('file');      // 'file' is the name of the file input field in the client side(UploadScreen.jsx)
  
router.post('/fileUpload',upload,async(req, res) => {
                
           try {
               
            return res.status(200).json({success:true,url:res.req.file.path,fileName:res.req.file.filename});
           } catch (error) {
            return res.status(500).json({success:false,error});
           }

});

module.exports = router;
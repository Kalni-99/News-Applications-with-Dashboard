const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');  // Set the destination for storing uploaded images
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + file.originalname);  // Set the filename as the current timestamp + original filename
    }
});

const fileFilter = (req, file, cb) => {
    // Accept only jpeg and png files
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5   // Limit file size to 5MB
    },
    fileFilter: fileFilter
});

module.exports = upload;

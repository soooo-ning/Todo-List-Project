const multer = require('multer');
const path = require('path');
const uploadPath = path.join(__dirname, '..', 'static', 'uploads');

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, done) {
      done(null, uploadPath);
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  }),
  limits: { fieldSize: 5 * 1024 * 1024 },
});

module.exports = uploadDetail;

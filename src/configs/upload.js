const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

const TMP_FOLDER = path.resolve(__dirname, "..", "..", "tmp");
const UPLOAD_FOLDER = path.resolve(TMP_FOLDER, "uploads");
const avatar = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, TMP_FOLDER);
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now().toString();
    const randomString = crypto.randomBytes(8).toString("hex");
    const fileExtension = path.extname(file.originalname);
    const uniqueFilename = `${timestamp}-${randomString}${fileExtension}`;

    cb(null, uniqueFilename);
  },
});

module.exports = { TMP_FOLDER, UPLOAD_FOLDER, avatar };

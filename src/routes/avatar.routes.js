const { Router } = require("express");
const uploadConfig = require("../configs/upload");
const multer = require("multer");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const AvatarUploadController = require("../controllers/AvatarUploadController");
const avatarRoutes = Router();
const avatarController = new AvatarUploadController();

const uploadAvatar = multer({ storage: uploadConfig.avatar });

avatarRoutes.patch(
  "/",
  ensureAuthenticated,
  uploadAvatar.single("file"),
  avatarController.upload
);

module.exports = avatarRoutes;

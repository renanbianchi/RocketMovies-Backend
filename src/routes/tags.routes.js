const { Router } = require("express");

const TagsController = require("../controllers/TagsController");
const tagsRoutes = Router();
const tagsController = new TagsController();

/* function myMiddleware(request, response, next) {
  console.log("Você passou pelo middleware");

  next();
} */

tagsRoutes.get("/tags/:user_id", tagsController.index);


module.exports = tagsRoutes;

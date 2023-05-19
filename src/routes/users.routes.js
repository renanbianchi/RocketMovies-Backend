const { Router } = require("express");

const UserController = require("../controllers/UserController");
const userRoutes = Router();
const userController = new UserController();

/* function myMiddleware(request, response, next) {
  console.log("Você passou pelo middleware");

  next();
} */

userRoutes.post("/users/", userController.create);
userRoutes.get("/users/:user_id/", userController.fetch);

module.exports = userRoutes;

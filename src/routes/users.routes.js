const { Router } = require("express");

const UserController = require("../controllers/UserController");
const userRoutes = Router();
const userController = new UserController();

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

userRoutes.post("/users/", userController.create);
userRoutes.get("/users/:user_id/", ensureAuthenticated, userController.fetch);
userRoutes.put("/users/", ensureAuthenticated, userController.update);

module.exports = userRoutes;

const { Router } = require("express");

const MovieNotesController = require("../controllers/MovieNotesController");

const movieNotesRoutes = Router();

const movieNotesController = new MovieNotesController();

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

movieNotesRoutes.use(ensureAuthenticated);

movieNotesRoutes.post("/", movieNotesController.create);
movieNotesRoutes.get("/", movieNotesController.fetch);
movieNotesRoutes.get("/all", movieNotesController.fetchAll);
movieNotesRoutes.delete("/:id", movieNotesController.delete);
movieNotesRoutes.put("/", movieNotesController.update);

module.exports = movieNotesRoutes;

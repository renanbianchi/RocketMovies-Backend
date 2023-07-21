const { Router } = require("express");

const userRoutes = require("./users.routes");
const movieNotesRoutes = require("./movieNotes.routes");
const tagsRoutes = require("./tags.routes");

const routes = Router();

routes.use("/", userRoutes);
routes.use("/notes", movieNotesRoutes);
routes.use("/tags", tagsRoutes)

module.exports = routes;

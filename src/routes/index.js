const { Router } = require("express");

const userRoutes = require("./users.routes");
/* const tagRoutes = require("./tags.routes"); */
const movieNotesRoutes = require("./movieNotes.routes");

const routes = Router();

routes.use("/", userRoutes);
/* routes.use("/tags", tagRoutes); */
routes.use("/notes", movieNotesRoutes);

module.exports = routes;

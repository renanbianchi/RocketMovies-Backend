const { Router } = require("express");

const userRoutes = require("./users.routes");
const movieNotesRoutes = require("./movieNotes.routes");
const tagsRoutes = require("./tags.routes");
const sessionRoutes = require("./sessions.routes")
const avatarRoutes = require("./avatar.routes")

const routes = Router();

routes.use("/", userRoutes);
routes.use("/notes", movieNotesRoutes);
routes.use("/tags", tagsRoutes)
routes.use("/sessions", sessionRoutes)
routes.use("/avatar", avatarRoutes)

module.exports = routes;

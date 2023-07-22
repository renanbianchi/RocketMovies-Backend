const { Router } = require("express");

const SessionsController = require("../controllers/SessionsController");

const sessionsController = new SessionsController();

sessionRoutes = Router();

sessionRoutes.post("/", sessionsController.create);

module.exports = sessionRoutes;

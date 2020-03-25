const express = require("express");

const routes = express.Router();

// Controllers
const SessionCtrl = require("./controllers/Session.ctrl");
const OngCtrl = require("./controllers/Ong.ctrl");
const IncidentCtrl = require("./controllers/Incident.ctrl");
const ProfileCtrl = require("./controllers/Profile.ctrl");

// Home
routes.get("/", (req, res) => {
  return res.json({
    message: "Hello World"
  });
});

// Login
routes.post("/sessions", SessionCtrl.create);

// ONG
routes.get("/ongs", OngCtrl.index);
routes.post("/ongs", OngCtrl.create);

// Incident
routes.get("/incidents", IncidentCtrl.index);
routes.post("/incidents", IncidentCtrl.create);
routes.delete("/incidents/:id", IncidentCtrl.delete);

// Profile
routes.get("/profile", ProfileCtrl.index);

module.exports = routes;

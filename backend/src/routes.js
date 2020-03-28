const express = require("express");
const { celebrate, Segments, Joi } = require("celebrate");
const routes = express.Router();

// Controllers
const SessionCtrl = require("./controllers/Session.ctrl");
const OngCtrl = require("./controllers/Ong.ctrl");
const IncidentCtrl = require("./controllers/Incident.ctrl");
const ProfileCtrl = require("./controllers/Profile.ctrl");
const { join } = require("./database/connection");

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
routes.post(
  "/ongs",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string()
        .required()
        .email(),
      whatsapp: Joi.string()
        .required()
        .min(10)
        .max(11),
      city: Joi.string().required(),
      uf: Joi.string()
        .required()
        .length(2)
    })
  }),
  OngCtrl.create
);

// Incident
routes.get(
  "/incidents",
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number()
    })
  }),
  IncidentCtrl.index
);
routes.post(
  "/incidents",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string()
        .required()
        .min(5),
      description: Joi.string()
        .required()
        .min(8),
      value: Joi.number()
        .required()
        .min(1)
    })
  }),
  IncidentCtrl.create
);
routes.delete(
  "/incidents/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required()
    })
  }),
  IncidentCtrl.delete
);

// Profile
routes.get(
  "/profile",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown()
  }),
  ProfileCtrl.index
);

module.exports = routes;

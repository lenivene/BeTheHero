const knex = require("knex");
const settings = require("../../knexfile");

const config =
  process.env.NODE_ENV === "test" ? settings.test : settings.development;

const connection = knex(config);

module.exports = connection;

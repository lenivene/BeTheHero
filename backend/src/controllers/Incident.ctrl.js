const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;

    const [totalCount] = await connection("incidents").count();

    const incidents = await connection("incidents")
      .join("ongs", "ongs.id", "=", "incidents.ong_id")
      .limit(5)
      .offset((Number(page) - 1) * 5)
      .select([
        "incidents.*",
        "ongs.name",
        "ongs.email",
        "ongs.whatsapp",
        "ongs.city",
        "ongs.city",
        "ongs.uf"
      ]);

    res.header("X-Total-Count", totalCount["count(*)"]);

    return res.json(incidents);
  },
  async create(req, res) {
    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;

    const [id] = await connection("incidents").insert({
      title,
      description,
      value,
      ong_id
    });

    return res.json({ id });
  },
  async delete(req, res) {
    const ong_id = req.headers.authorization;
    const { id } = req.params;

    const incident = await connection("incidents")
      .where("id", id)
      .select("ong_id")
      .first();

    if (incident.ong_id !== ong_id) {
      return res.status(401).json({ message: "Operation not permitted" });
    }

    await connection("incidents")
      .where("id", id)
      .delete();

    return res.status(204).send();
  }
};

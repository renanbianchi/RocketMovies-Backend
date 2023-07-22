const knex = require("../database/knex");
const sqliteConnection = require("../database/sqlite");
const AppError = require("../utils/AppError");

class TagsController {
  async index(request, response) {
    const { user_id } = request.params;
    const database = await sqliteConnection();

    const fetchTags = await database.all(
      "SELECT * FROM tags WHERE user_id = (?)",
      [user_id]
    );

    const fetchTags2 = await knex
      .select()
      .from("tags")
      .where("user_id", user_id);

    if (!fetchTags) {
      throw new AppError("Tags não encontradas", 400);
    }

    return response.status(200).json(fetchTags);
  }

  /* async post(request, response) {
    const { user_id } = request.params;
  } */
}

module.exports = TagsController;

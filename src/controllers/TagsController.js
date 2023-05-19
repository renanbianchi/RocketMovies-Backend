const sqliteConnection = require("../database/sqlite");
const AppError = require("../utils/AppError");

class TagsController {
  async index(request, response) {
    const { user_id } = request.params;
    const database = await sqliteConnection;
    const fetchTags = await database.get("SELECT * FROM tags WHERE user_id = (?)", [user_id])
    
    
    const tags = await knex("tags").where({ user_id });
    console.log(tags);



    return response.json(tags);
  }
  async post(request, response) {
    const { user_id } = request.params
  }
}

module.exports = TagsController;

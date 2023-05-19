const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class MovieNotesController {
  async create(request, response) {
    try {
      const { user_id } = request.params;
      const { movie_title, movie_description, grade, tags } = request.body;

      const [note_id] = await knex(`movie_notes`).insert({
        user_id,
        movie_title,
        movie_description,
        grade,
      });

      const tagsInsert = tags.map((tag_name) => {
        return {
          tag_name,
          note_id,
          user_id,
        };
      });

      await knex("tags").insert(tagsInsert);
      return response.status(201).json();
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }
}
module.exports = MovieNotesController;

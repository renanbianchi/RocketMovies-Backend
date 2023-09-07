const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class MovieNotesController {
  async create(request, response) {
    try {
      const user_id = request.user.id;
      const { movie_title, movie_description, grade, tags, movie_id, background_path } = request.body;

      const [note_id] = await knex(`movie_notes`).insert({
        user_id,
        movie_title,
        movie_description,
        grade,
        movie_id,
        background_path,
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
  async fetch(request, response) {
    const user_id = request.user.id;

    if (!user_id) {
      throw new AppError("Usuário inexistente");
    }

    const getnotes = await knex("movie_notes")
      .select(knex.raw("group_concat(tags.tag_name) as tags"))
      .select("movie_notes.*")
      .select("users.name")
      .leftJoin("tags", "tags.note_id", "movie_notes.id")
      .leftJoin("users", "users.id", "movie_notes.user_id")
      .where("movie_notes.user_id", user_id)
      .groupBy("movie_notes.id");

    console.log(getnotes);

    return response.status(200).json(getnotes);
  }
  async delete(request, response) {
    const user_id = request.user.id;
    const { id } = request.params;
    console.log(id);

    if (!user_id) {
      throw new AppError("Usuário inexistente");
    }

    if (!id) {
      throw new AppError("Note_id não informada!");
    }

    try {
      await knex("movie_notes").where({ id }).delete();
      return response.json();
    } catch (e) {
      console.log(e);
      throw new AppError("Erro exclusão", 400);
    }
  }
}
module.exports = MovieNotesController;

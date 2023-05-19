exports.up = (knex) =>
  knex.schema.createTable("tags", (table) => {
    table.increments("id");
    table.text("tag_name");
    table
      .integer("note_id")
      .references("id")
      .inTable("movie_notes")
      .onDelete("CASCADE");
    table
      .integer("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
  });

exports.down = (knex) => knex.schema.dropTable("tags");

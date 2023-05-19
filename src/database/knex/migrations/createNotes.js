exports.up = (knex) =>
  knex.schema.createTable("movie_notes", (table) => {
    table.increments("id");
    table.text("movie_title");
    table.text("movie_description");
    table.integer("grade");
    table
      .integer("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
  });

exports.down = (knex) => knex.schema.dropTable("movie_notes");

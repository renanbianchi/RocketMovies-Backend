/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) =>
  knex.schema.table("movie_notes", (table) => {
    table.integer("background_path");
  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  knex.schema.table("movie_notes", (table) => {
    table.dropColumn("background_path");
  });
};

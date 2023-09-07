/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) =>
  knex.schema.table("movie_notes", (table) => {
    table.integer("movie_id");
  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  knex.schema.table("movie_notes", (table) => {
    table.dropColumn("movie_id");
  });
};

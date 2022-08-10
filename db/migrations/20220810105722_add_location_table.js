/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema.createTable("dive_site_locations", (table)=> {
        table.increments("id");
        table.string("name", 255)
            .unique()
            .notNullable();
        table.float("latitude", 255)
            .notNullable();
        table.float("longitude", 255)
            .notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};

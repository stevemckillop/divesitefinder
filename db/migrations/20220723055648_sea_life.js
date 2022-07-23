/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = async function(knex) {
    await knex.schema.createTable("sea_life", (table)=> {
        table.increments("id");
        table.string("name", 255)
            .unique()
            .notNullable();
    }) 
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    return await knex.schema
    .dropTable("sea_life")
};

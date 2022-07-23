require("dotenv").config({
  });
  
  module.exports = {
  
      client: 'pg',
      connection: process.env.DB_URL || process.env.DB_URL_LOCAL,
      migrations: {
        tableName: 'knex_migrations',
        directory: __dirname + "/db/migrations"
      },
     seeds: {
        directory: "db/seeds"
      }
  
  };
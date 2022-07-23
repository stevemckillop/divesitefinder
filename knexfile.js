require("dotenv").config({
    path: "./.env.local",
  });
  
  module.exports = {
  
    development: {
      client: 'postgresql',
      connection: process.env.DB_URL || {
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
      },
      migrations: {
        tableName: 'knex_migrations',
        directory: "./db/migrations"
      },
     seeds: {
        directory: "./db/seeds"
      }
    },
  
  };
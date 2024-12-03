require("dotenv").config();

module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    //MIGARTION is where you write your sql query(ex: drop table, create table)
    migrations: {
      directory: "./migrations",
    },
    // fake data to make sure it your database is not empty
    seeds: {
      directory: "./db/seeds",
    },
  },
};

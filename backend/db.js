const { Pool } = require("pg");

const pool = new Pool({
  host: "db",
  user: "postgres",
  password: "postgres",
  database: "usersdb",
  port: 5432,
});

module.exports = { pool };

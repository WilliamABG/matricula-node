import pkg from "pg";

export const pool = new pkg.Pool({
  user: "postgres",
  password: "postgres",
  database: "dbnode",
  host: "localhost",
  port: 5432,
});

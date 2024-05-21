import mysql from "mysql2"

const db = mysql.createConnection({
  host: "localhost",
  database: "blog",
  user: "root",
  password: "venso1901"
});
export default db
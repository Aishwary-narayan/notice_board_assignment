const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password:"ashar",
    host: "localhost",
    port: 5432,
    database:"notice"
});

module.exports = pool;

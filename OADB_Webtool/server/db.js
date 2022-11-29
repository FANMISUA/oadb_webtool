const Pool = require("pg").Pool

//local db server
// const pool = new Pool({
//   user: "postgres",
//   password: "password",
//   host: "localhost",
//   port: 5432,
//   database: "oadb"
// })

//remote server
const pool = new Pool({
  user: "oak",
  password: "10.14.0.122",
  host: "10.14.0.122",
  port: 5432,
  database: "oak"
})

module.exports = pool
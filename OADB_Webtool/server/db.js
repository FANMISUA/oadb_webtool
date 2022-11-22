const Pool = require("pg").Pool

// const pool = new Pool({
//   user: "postgres",
//   password: "tea4two",
//   host: "localhost",
//   port: 5432,
//   database: "finaloakdbv1"
// })


const pool = new Pool({
  user: "oak",
  password: "10ja8!j.aYeBaq",
  host: "ncsvmdbbapp-dev.fda.gov",
  port: 5432,
  database: "oak"
})

module.exports = pool
var mysql = require("mysql2");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "sarath",
    port:3306
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
var sql =
  "select * from user";
con.query(sql, function (err, result) {
  if (err) throw err;
           console.log(result);
});
});
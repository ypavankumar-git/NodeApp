const http = require("http");
var mysql = require("mysql2");
const hostname = process.env.DB_ENDPOINT || "terraform-20220817133916422600000005.cdgkfoacvf6u.us-east-1.rds.amazonaws.com:3306";
const port = process.env.APP_PORT || "3306";
const dbUsername = process.env.DB_USER_NAME || "Users";
const dbPassword = process.env.DB_PASSWORD || "pavankumar";
const dbName = process.env.DB_NAME || "UserDB";
const node_port = "3030";
const node_hostname = "0.0.0.0";
console.log("0!");

console.log(hostname,port);
const server = http.createServer((req, res) => {
       console.log("1!");
  let dbResult;
  var con = mysql.createConnection({
    host: hostname.slice(0,-5), 
    user: dbUsername,
    password: dbPassword,
    database: dbName,
    port: port,
  });
  console.log("3!");
  con.connect(function (err) {
     console.log("2");
    if (err) console.log(err);
    console.log("Connected!");
    var sql = "show databases";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
        dbResult = result;
          res.statusCode = 200;
          res.setHeader("Content-Type", "text/plain");
          console.log(dbResult);
          res.end(JSON.stringify(dbResult));
    });
  });

});

server.listen(node_port, node_hostname, () => {
  console.log(`Server running at http://${node_hostname}:${node_port}/`);
});

var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "yash",
  password: "krsna",
  database: "usersmanagement",
});
var values = [
  [6, "abcoiuyt", "chd", 7766554, 31],
  [37, "cba", "pun", 4354443, 33],
  [48, "asdfgh", "science", 409873, 34],
  [66, "mnbv", "jod", 21234987, 38],
];
var sql =
  "INSERT INTO customers (order_id,name,address,phonenumber,age) VALUES ?";

con.connect(function (err) {
  if (err) throw err;
  console.log("\n\tConnected");
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("\n\tInserted multiple values");
  });
});

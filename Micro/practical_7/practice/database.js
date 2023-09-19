var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "yash",
  password: "krsna",
});
con.connect(function (err) {
  if (err) throw err;
  console.log("\n\tConnected");
  con.query("\n\tCreate database usersmanagement", function (err, result) {
    if (err) throw err;
    console.log("\tCreated Database");
  });
});

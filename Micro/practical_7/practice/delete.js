var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "yash",
  password: "krsna",
  database: "usersmanagement",
});
con.connect(function (err) {
  if (err) throw err;
  console.log("\n\tConnected");
  con.query(
    "delete from customers where phonenumber=12345;",
    function (err, result) {
      if (err) throw err;
      console.log(result);
    }
  );
});

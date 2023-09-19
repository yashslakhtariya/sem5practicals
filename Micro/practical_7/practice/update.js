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
    "UPDATE customers SET name = 'ramanpreet' WHERE order_id = 4;",
    function (err, result) {
      if (err) throw err;
      console.log("\n\tTable Updated");
    }
  );
});

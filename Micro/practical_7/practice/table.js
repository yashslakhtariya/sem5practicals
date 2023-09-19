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
    "Create table customers (order_id int primary key,name varchar(50),address varchar(50),phonenumber bigint,age int);",
    function (err, result) {
      if (err) throw err;
      console.log("\n\tCreated Table ");
    }
  );
});

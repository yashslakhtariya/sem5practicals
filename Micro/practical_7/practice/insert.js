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
    "insert into customers (order_id,name,address,phonenumber,age) VALUES(2,'vikas','chandigarh',1232435454,30),(3,'yashcba','punjab',43432343,32),(4,'abc','sciencecity',434343243,30),(5,'yash_gnu','jodphur',21244354,37);",
    function (err, result) {
      if (err) throw err;
      console.log("\n\tInserted multiple values");
    }
  );
});

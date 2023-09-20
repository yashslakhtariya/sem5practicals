var mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var port = 8080;
var con = mysql.createConnection({
  host: "localhost",
  user: "yash",
  password: "krsna",
  database: "usersmanagement",
});
var sql =
  "INSERT INTO customers (order_id,name,address,phonenumber,age) VALUES (?, ?, ?, ?, ?);";
var order, nme, add, phone, ag;

app.post("/api/store", (req, res) => {
  (order = req.body.order_id),
    (nme = req.body.name),
    (add = req.body.address),
    (phone = req.body.phonenumber),
    (ag = req.body.age);

  //values.push(product);
  res.send("entry done");
  con.connect(function (err) {
    if (err) throw err;
    console.log("\n\tConnected");
    con.query(sql, [order, nme, add, phone, ag], function (err, result) {
      if (err) throw err;
      console.log("\n\tInserted multiple values");
    });
  });
});
app.listen(port);

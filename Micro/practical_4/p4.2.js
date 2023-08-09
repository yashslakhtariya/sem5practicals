var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();

var port = 7575;

var emps = [
  {
    id: "1",
    name: "Madhav",
    email: "madhav@haribol.com",
    phone: "1234567890",
    designation: "CEO",
  },
  {
    id: "2",
    name: "Gopal",
    email: "gopal@haribol.com",
    phone: "0123456789",
    designation: "HR",
  },
  {
    id: "3",
    name: "Damodar",
    email: "damodar@haribol.com",
    phone: "9876543210",
    designation: "Finance",
  },
  {
    id: "4",
    name: "Keshav",
    email: "keshav@haribol.com",
    phone: "9630147852",
    designation: "HR",
  },
];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "./public")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/xyz/employees", (req, res) => {
  res.send(emps);
});

app.get("/xyz/employeesid", (req, res) => {
  const product = emps.find(({ id }) => id == req.query.id);

  if (!product)
    res
      .status(404)
      .send(
        '<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>'
      );
  else res.send(product);
});

app.post("/xyz/employeesadd", (req, res) => {
  var product = {
    id: req.body.id,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    dept: req.body.dept,
  };
  emps.push(product);
  res.send(product);
});

app.post("/xyz/employeeschange", (req, res) => {
  var product = emps.find(({ id }) => id === req.body.id);
  if (!product)
    res
      .status(404)
      .send(
        '<h2 style="font-family: Malgun Gothic; color: darkred;">Not Found!! </h2>'
      );
  else {
    product.name = req.body.name;
    product.email = req.body.email;
    product.phone = req.body.phone;
    product.designation = req.body.designation;
    res.send(product);
  }
});

app.post("/xyz/employeesdelete", (req, res) => {
  const product = emps.find(({ id }) => id === req.body.id);
  if (!product)
    res
      .status(404)
      .send(
        '<h2 style="font-family: Malgun Gothic; color: darkred;"> Not Found!! </h2>'
      );
  else {
    const index = emps.indexOf(product);
    emps.splice(index, 1);
    res.send(product);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port  http://localhost:${port}`);
});

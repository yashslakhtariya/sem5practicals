const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let port = 4200;
let emps = [
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

app.get("/", (req, res) => {
  res.send("Welcome to YSL Company REST API!");
});

app.get("/ysl/employees", (req, res) => {
  res.send(emps);
});

app.get("/ysl/employees/:id", (req, res) => {
  const product = emps.find(({ id }) => id === req.params.id);

  if (!product) res.status(404).send("Not found!");
  res.send(product);
});

app.post("/ysl/employees", (req, res) => {
  let product = {
    id: req.body.id,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    dept: req.body.dept,
  };
  emps.push(product);
  res.send(product);
});

app.put("/ysl/employees/:id", (req, res) => {
  let product = emps.find(({ id }) => id === req.params.id);
  if (!product) res.status(404).send("Not found!");
  product.id = req.body.id;
  product.name = req.body.name;
  product.email = req.body.email;
  product.ln = req.body.ln;
  product.phone = req.body.phone;
  product.designation = req.body.designation;
  res.send(product);
});

app.delete("/ysl/employees/:id", (req, res) => {
  const product = emps.find(({ id }) => id === req.params.id);
  if (!product) res.status(404).send("Not found!");

  const index = emps.indexOf(product);
  emps.splice(index, 1);

  res.send(product);
});

app.listen(port, () => {
  console.log(`\nThe server is running on port ${port}\n`);
});

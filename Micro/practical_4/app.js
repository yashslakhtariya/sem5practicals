const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 4200;
const employees = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    designation: "Software Engineer",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "987-654-3210",
    designation: "Product Manager",
  },
  // Add more employees as needed
];

app.get("/", (req, res) => {
  res.send("Welcome to Industry REST API!");
});

app.get("/api/employees", (req, res) => {
  res.send(employees);
});

app.get("/api/employees/:id", (req, res) => {
  const employee = employees.find(({ id }) => id === parseInt(req.params.id));

  if (!employee) {
    res
      .status(404)
      .send(
        'Oops... Can\'t find what you are looking for!'
      );
  } else {
    res.send(employee);
  }
});

app.post("/api/employees", (req, res) => {
  const newEmployee = {
    id: employees.length + 1,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    designation: req.body.designation,
  };
  employees.push(newEmployee);
  res.send(newEmployee);
});

app.put("/api/employees/:id", (req, res) => {
  const employee = employees.find(({ id }) => id === parseInt(req.params.id));
  if (!employee) {
    res
      .status(404)
      .send(
        '<h2 style="font-family: Malgun Gothic; color: darkred;">Not Found!! </h2>'
      );
  } else {
    employee.name = req.body.name;
    employee.email = req.body.email;
    employee.phone = req.body.phone;
    employee.designation = req.body.designation;
    res.send(employee);
  }
});

app.delete("/api/employees/:id", (req, res) => {
  const employee = employees.find(({ id }) => id === parseInt(req.params.id));
  if (!employee) {
    res
      .status(404)
      .send(
        '<h2 style="font-family: Malgun Gothic; color: darkred;">Not Found!! </h2>'
      );
  } else {
    const index = employees.indexOf(employee);
    employees.splice(index, 1);
    res.send(employee);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

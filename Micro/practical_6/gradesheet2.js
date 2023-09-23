const express = require("express");
const csv = require("csv-parser");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const fs = require("fs");
const filepath = "./students.csv";
const app = express();
app.use(express.json());
var readStream = fs.createReadStream(filepath);
var users = [];
app.get("/students", (req, res) => {
  readStream.pipe(csv()).on("data", (row) => {
    users.push(row);
    console.log(row);
  });
  readStream.on("end", function (end) {
    console.log("file read successfully");
    res.json(users);
  });
  // console.log(users);
  // res.json(users);
});
//----------------------------------------------------------------------------------------
const csvWriter = createCsvWriter({
  path: "students.csv",
  header: [
    { id: "sname", title: "Student_Name" },
    { id: "mmarks", title: "MidTerm_Marks" },
    { id: "amarks", title: "Assignment_Marks" },
    { id: "fmarks", title: "Final_Marks" },

    { id: "tmarks", title: "Total_Marks" },
  ],
  append: true,
});
app.post("/students", (req, res) => {
  const data = req.body;
  const createCsvWriter = require("csv-writer").createObjectCsvWriter;
  const csvWriter = createCsvWriter({
    path: "students.csv",
    header: [
      { id: "sname", title: "Student_Name" },
      { id: "mmarks", title: "MidTerm_Marks" },
      { id: "amarks", title: "Assignment_Marks" },
      { id: "fmarks", title: "Final_Marks" },
      { id: "tmarks", title: "Total_Marks" },
    ],
    append: true,
  });
  if (
    !data.sname ||
    !data.mmarks ||
    !data.amarks ||
    !data.fmarks ||
    !data.tmarks
  ) {
    res.json({
      message:
        "All fields are mandatory please provide all the required fields",
    });
  } else {
    const x = [
      {
        sname: data.sname,
        mmarks: data.mmarks,
        amarks: data.amarks,
        fmarks: data.fmarks,
        tmarks: data.tmarks,
      },
    ];
    csvWriter.writeRecords(x).then(() => console.log("csv writen"));
  }
  res.json({ message: "Data has been successfully added in the csv file." });
});
//---------------------------------------------------------------------------------------------------
app.post("/delete", (req, res) => {
  const no_rows = req.body.rows;
  if (!no_rows) {
    res.json({ message: "No of rows required" });
  } else {
    const rows = [];
    fs.createReadStream(filepath)

      .pipe(csv())
      .on("data", (row) => {
        rows.push(row);
      })
      .on("end", () => {
        if (no_rows >= 0 && no_rows < rows.length) {
          rows.splice(no_rows, 1);
          const csvWriter = createCsvWriter({
            path: "grocery.csv",
            header: Object.keys(rows[0]).map((column) => ({
              id: column,
              title: column,
            })),
          });
          csvWriter
            .writeRecords(rows)
            .then(() => {
              console.log("Row deleted successfully");
            })
            .catch((error) => {
              console.error("Error deleting row:", error);
            });
        } else {
          console.error("Invalid row index");
        }
      });
    res.json({ message: "Successfulltrows." });
  }
});
deleted;
app.post("/rename", (req, res) => {
  const d = req.body.name;
  if (!d) {
    res.json({ message: "Name is required for renaming the file." });
  } else {
    const oldFilePath = "students.csv";
    fs.rename(oldFilePath, d, (error) => {
      if (error) {
        console.error("Error renaming file:", error);
      } else {
        console.log("File renamed successfully");
        console.log("The new file name is " + d);
      }
    });
    res.json({ message: "Successfully changed the name of the file" });
  }
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

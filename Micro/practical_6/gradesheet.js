const express = require("express");
const fs = require("fs");
const csv = require("csv-parser");
const app = express();
const port = 4200;

app.use(express.json());

const dataFilePath = "./students.csv";

function readCSV(callback) {
  const results = [];
  fs.createReadStream(dataFilePath)
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      callback(results);
    });
}

function writeCSV(data, callback) {
  const writeStream = fs.createWriteStream(dataFilePath);
  writeStream.write(
    "StudentName,Quiz_Marks,Mid-term_Marks,Assignment_Marks,Final_Exam_Marks,Total_Marks\n"
  );
  data.forEach((row) => {
    writeStream.write(
      `${row.StudentName},${row.Quiz_Marks},${row["Mid-term_Marks"]},${row["Assignment_Marks"]},${row["Final_Exam_Marks"]},${row.Total_Marks}\n`
    );
  });
  writeStream.end(() => {
    callback();
  });
}

app.get("/students", (req, res) => {
  readCSV((data) => {
    res.json(data);
  });
});

app.get("/students/:name", (req, res) => {
  const studentName = req.params.name;

  readCSV((data) => {
    const student = data.find((student) => student.StudentName === studentName);

    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ message: "Student not found" });
    }
  });
});

app.post("/students", (req, res) => {
  readCSV((data) => {
    const newStudent = req.body;
    data.push(newStudent);

    writeCSV(data, () => {
      res.status(201).json({ message: "Student added successfully" });
    });
  });
});

app.put("/students/:name", (req, res) => {
  const studentName = req.params.name;
  const updatedStudent = req.body;

  readCSV((data) => {
    const studentIndex = data.findIndex(
      (student) => student.StudentName === studentName
    );

    if (studentIndex === -1) {
      res.status(404).json({ message: "Student not found" });
    } else {
      data[studentIndex] = updatedStudent;

      writeCSV(data, () => {
        res.json({ message: "Student updated successfully" });
      });
    }
  });
});

app.delete("/students/:name", (req, res) => {
  const studentName = req.params.name;

  readCSV((data) => {
    const updatedData = data.filter(
      (student) => student.StudentName !== studentName
    );

    if (data.length === updatedData.length) {
      res.status(404).json({ message: "Student not found" });
    } else {
      writeCSV(updatedData, () => {
        res.json({ message: "Student deleted successfully" });
      });
    }
  });
});

app.listen(port, () => {
  console.log(`\n\tServer is running on port ${port}`);
});

const fs = require("fs");
const newName = "grocery.csv";

function CSVrename() {
  fs.rename("./data.csv", newName, (err) => {
    if (err) {
      console.error("Error renaming file : ", err);
    } else {
      console.log("File renamed successfully!");
    }
  });
}

CSVrename();

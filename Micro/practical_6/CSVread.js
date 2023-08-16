const fs = require("fs");
const csv = require("csv-parser");

const results = [];

function CSVread() {
  fs.createReadStream("./data.csv")
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      console.log("\nData in CSV : ");
      console.log(results);
    });
}

CSVread();

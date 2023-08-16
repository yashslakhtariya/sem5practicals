const fs = require("fs");
const csv = require("csv-parser");

function CSVremove() {
  const DATA = [];
  fs.createReadStream("./data.csv")
    .pipe(csv())
    .on("data", (data) => DATA.push(data))
    .on("end", () => {
      const id = "5";
      const updated = DATA.filter((row) => row.id !== id);

      const writeStream = fs.createWriteStream("./data.csv");
      writeStream.write("id,name,price\n");
      updated.forEach((row) => {
        writeStream.write(`${row.id},${row.name},${row.price}\n`);
      });
      writeStream.end(() => {
        console.log("Data removed successfully.");
      });
    });
}

CSVremove;

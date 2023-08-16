const fs = require("fs");
const csv = require("csv-parser");

export function CSVpush() {
  const DATA = [];
  fs.createReadStream("./data.csv")
    .pipe(csv())
    .on("data", (data) => DATA.push(data))
    .on("end", () => {
      const updates = { id: "5", name: "Cheese", price: "125" };
      DATA.push(updates);

      const writeStream = fs.createWriteStream("./data.csv");
      writeStream.write("id,name,price\n");
      DATA.forEach((row) => {
        writeStream.write(`${row.id},${row.name},${row.price}\n`);
      });
      writeStream.end(() => {
        console.log("Data added successfully.");
      });
    });
}

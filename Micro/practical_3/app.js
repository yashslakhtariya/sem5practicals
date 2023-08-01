let DT = require("./dateTimeModule");
let http = require("http");

http
  .createServer(function (req, res) {
    if (req.url === "/") {
      res.write("\n\n\tWelcome to the YSL Date Time Module!\n\t");
    }
    if (req.url === "/datetime") {
      let dt = DT();
      res.write(`\n\n\tDate : ${dt.tarikh}`);
      res.write(`\n\tTime : ${dt.samay}`);
    }
    res.end();
  })
  .listen(6432, function () {
    console.log("\n\tServer is running on port 6432");
  });
k
let express = require("express");
let app = express();
let port = 4200;

app.use(express.static(__dirname + "/bulb_buttons"));

app.listen(port, function () {
  console.log(`\nServer is being started on ${port}`);
});

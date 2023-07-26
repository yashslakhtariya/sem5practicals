let DT = require("./dateTimeModule");

function Init() {
  let dt = DT();
  console.log(`\nDate : ${dt.tarikh}`);
  console.log(`Time : ${dt.samay}`);
}

Init();

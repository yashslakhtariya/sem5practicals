var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://yash:haribol@127.0.0.1:27017/?authMechanism=DEFAULT";
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db2) {
  if (err) throw err;
  var dbo = db2.db("db2");
  var empdetails = {
    name: "raman(cba-32)",
    address: "ganpat university",
    number: 12332,
  };
  dbo.collection("mycollection").insertOne(empdetails, function (err, res) {
    if (err) throw err;
    console.log("single employee data inserted");
    db2.close();
  });
});

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://yash:haribol@127.0.0.1:27017/?authMechanism=DEFAULT";
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db2) {
  if (err) throw err;
  var dbo = db2.db("db2");
  dbo.collection("mycollection").find({}).toArray(function (err, result) {
    if (err) throw err;
    // console.log(result);
    console.log(result);
    db2.close();
  });
});

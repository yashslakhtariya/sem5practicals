var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://yash:haribol@127.0.0.1:27017/?authMechanism=DEFAULT";
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db2) {
  if (err) throw err;
  var dbo = db2.db("db2");
  var empdetails = [
    { name: "YASH_GNU", address: "HARYANA" },
    { name: "vikas", address: "sciencecity" },
    { name: "aman", address: "drivein" },
    { name: "mahendra", address: "punjab" },
    { name: "ruchin", address: "lahore" },
    { name: "sushil", address: "gujrat" },
    { name: "vikrant", address: "baroda" },
    { name: "jeet", address: "chandigarh" },
    { name: "deep", address: "mehasana" },
    { name: "Vicky", address: "delhi" },
    { name: "ranbir", address: "mumbai" },
  ];
  dbo.collection("mycollection").insertMany(empdetails, function (err, res) {
    if (err) throw err;
    console.log(res);
    console.log(
      "The count of total employees who's data has been inserted are : " +
        res.insertedCount
    );
    db2.close();
  });
});

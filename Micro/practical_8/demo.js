var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://yash:haribol@127.0.0.1:27017/?authMechanism=DEFAULT";
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db2) {
  if (err) throw err;
  console.log("Connection successful!");
  db2.close();
  console.log("Successfully disconnected!");
});

// "mongodb": "^3.7.3"
// {useUnifiedTopology: true}
// When the connection is successfully established, db2 will contain the MongoDB database connection object, allowing you to interact with the database.

// So, db2 is a reference to the MongoDB database connection object, which you can use to perform various database operations, such as creating collections, inserting documents, querying data, and more, within the context of that specific database connection.

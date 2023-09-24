let MongoClient = require("mongodb").MongoClient;
let url = "mongodb://yash:haribol@127.0.0.1:27017/?authMechanism=DEFAULT";
let details = [
     {
          name: "John Doe",
          age: 20,
          address: "123 Main Street",
          phone: "555-123-4597",
          email: "john.doe@example.com",
     },
     {
          name: "Jane Smith",
          age: 15,
          address: "456 Elm Street",
          phone: "555-234-5078",
          email: "jane.smith@example.com",
     },
     {
          name: "Robert Johnson",
          age: 21,
          address: "789 Oak Street",
          phone: "555-345-2789",
          email: "robert.johnson@example.com",
     },
     {
          name: "Emily Davis",
          age: 16,
          address: "101 Pine Street",
          phone: "555-456-7890",
          email: "emily.davis@example.com",
     },
     {
          name: "Michael Wilson",
          age: 19,
          address: "202 Cedar Street",
          phone: "555-567-8901",
          email: "michael.wilson@example.com",
     },
     {
          name: "Sarah Brown",
          age: 14,
          address: "303 Maple Street",
          phone: "555-678-9012",
          email: "sarah.brown@example.com",
     },
     {
          name: "William Lee",
          age: 21,
          address: "404 Birch Street",
          phone: "555-789-0123",
          email: "william.lee@example.com",
     },
     {
          name: "Olivia Clark",
          age: 18,
          address: "505 Redwood Street",
          phone: "555-890-1234",
          email: "olivia.clark@example.com",
     },
     {
          name: "David Turner",
          age: 15,
          address: "606 Spruce Street",
          phone: "555-901-2345",
          email: "david.turner@example.com",
     },
     {
          name: "Sophia Rodriguez",
          age: 24,
          address: "707 Pine Avenue",
          phone: "555-012-3456",
          email: "sophia.rodriguez@example.com",
     },
];

MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
     if (err) throw err;
     let database = client.db("student");
     console.log("\n\tCreated database - student");

     database.createCollection("cba", function (err, res) {
          if (err) throw err;
          console.log("\tCreated collection - cba");

          database.collection("cba").insertMany(details, function (err, res) {
               if (err) throw err;
               console.log(res);
               console.log(`\n\tInserted ${res.insertedCount} records`);
          });

          database.collection("cba").find({ age: { $gt: 16 } }).toArray(function (err, result) {
               if (err) throw err;
               console.log("\n\tStudent(s) with age > 16 is/are : \n");
               console.log(result);
          });

          database.collection("cba").deleteMany({ phone: { $regex: /6/ } }, function (err, result) {
               if (err) throw err;
               console.log(`\n\tDeleted ${result.deletedCount} student(s) with phone numbers containing '6'`);
               client.close();
          });
     });
});

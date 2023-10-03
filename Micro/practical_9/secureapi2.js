const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

app.post("/api/login", (req, res) => {
     //you can do this either synchronously or asynchronously
     //if synhronously, you can set a variable to jwt sign and pass it into the payload with secret key
     //if async => call back

     //Mock user
     const user = {
          id: Date.now(),
          userEmail: "yashlakhtariya1010@gmail.com",
          password: "harekrishna",
     };

     //send abpve as payload
     jwt.sign(
          { user },
          "mysecret",
          {
               // expiresIn: "10h" // it will be expired after 10 hours
               //expiresIn: "20d" // it will be expired after 20 days
               //expiresIn: 120 // it will be expired after 120ms
               expiresIn: "3600s", // it will be expired after 120s
          },
          (err, token) => {
               res.json({
                    token,
               });
          }
     );
});

app.get("/api/profile", verifyToken, (req, res) => {
     jwt.verify(req.token, "mysecret", (err, authData) => {
          if (err) res.sendStatus(403);
          else {
               res.json({
                    message: "Welcome to Profile",
                    userData: authData,
               });
          }
     });
});

//Verify Token
function verifyToken(req, res, next) {
     //Auth header value = > send token into header
     const bearerHeader = req.headers["authorization"];
     //check if bearer is undefined
     if (typeof bearerHeader !== "undefined") {
          //split the space at the bearer
          const bearer = bearerHeader.split(" ");
          //Get token from string
          const bearerToken = bearer[1];
          //set the token
          req.token = bearerToken;
          //next middleweare
          next();
     } else {
          //Fobidden
          res.sendStatus(403);
     }
}

app.listen(5000, (err) => {
     if (err) {
          console.log(err);
     }
     console.log("\n\tServer Started on PORT 5000");
});

// {
//      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxNjk1NzQ4ODc0OTI5LCJ1c2VyRW1haWwiOiJwcmVldHJhbWFuNTAwQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDU2Nzg5In0sImlhdCI6MTY5NTc0ODg3NCwiZXhwIjoxNjk1NzQ4OTk0fQ.AqWQfHjBGC2lzdSkMvSEUXF5nUknAG20YLBFUNW51dw";
// }

// verifyToken is used as middleware. It means that this route will only be accessible if the verifyToken middleware allows it. The verifyToken function is expected to extract the JWT token from the request and set it in req.token. If the token is not present or invalid, the middleware may prevent further execution of this route.

// Inside the route handler, it uses the jwt.verify function to verify the JWT token (req.token) with the secret key 'mysecret'. The jwt.verify function takes a callback that will be executed when the verification process is complete.
//

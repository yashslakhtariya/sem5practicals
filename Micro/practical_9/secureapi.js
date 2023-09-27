// Requiring module
const express = require("express");

const app = express();

function authentication(req, res, next) {
     var authheader = req.headers.authorization;
     console.log(req.headers);

     if (!authheader) {
          var err = new Error('You are not authenticated!');
          res.setHeader('WWW-Authenticate', 'Basic');
          err.status = 401;
          return next(err);
     }
     var auth = new Buffer.from(authheader.split(' ')[1],
          'base64').toString().split(':');
     var user = auth[0];
     var pass = auth[1];

     if (user == 'admin' && pass == 'password') {
          // If Authorized user
          next();
     } else {
          var err = new Error('You are not authenticated!');
          res.setHeader('WWW-Authenticate', 'Basic');
          err.status = 401;
          return next(err);
     }
}

// First step is the authentication of the client
app.use(authentication);
//app.use(express.static(path.join(__dirname, 'public')));
app.get('/protected', (req, res) => {
     res.send('I can be reached only using an authorised api key.');
});
// Server setup
app.listen((4200), () => {
     console.log("Server is Running");
});
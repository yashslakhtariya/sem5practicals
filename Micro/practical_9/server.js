const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const app = express();
app.use('/', (req, res, next) => {
     res.send('Hare Krishna! I am SSL Server!');
});
const options = {
     key: fs.readFileSync('ysl-key1.pem'),
     cert: fs.readFileSync('cert.pem')
};
const sslServer = https.createServer(options, app);
sslServer.listen(4200, () => {
     console.log('\n\tSecure server is listening on port 4200');
});

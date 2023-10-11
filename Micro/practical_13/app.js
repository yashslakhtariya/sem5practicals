'use strict';

const express = require('express');

//Constants
const PORT = 4200;
const HOST = '0.0.0.0';

//App
const app = express();
app.get('/', (req, res) => {
     res.send('\n\tHello Docker is running');
});

app.listen(PORT, HOST);
console.log('\n\tRunning on http://${HOST}:${PORT}');

require ('dotenv/config');
const express = require ('express');
const logger = require ('morgan');
const cors = require ('cors');
const helmet = require ('helmet');
const bodyParser = require ('body-parser');
const port = process.env.PORT | 3003

const router = require ('./src/routes/index');

const index = express ();

index.listen (port, () => {
  console.log ('Server is Running on ' + port);
});

index.use (logger ('dev'));
index.use (helmet.xssFilter ()); 
index.use (cors ());
index.use (bodyParser.json ());
index.use (bodyParser.urlencoded ({extended: false}));

index.use ('/', router); 

module.exports = index;
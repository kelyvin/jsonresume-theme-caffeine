'use strict';
const
    express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path');
let server = express(),
    create,
    start;
  console.log(process.cwd());
  // Returns middleware that parses json
  server.use(bodyParser.json());
  // set the view engine to ejs
  server.set('view engine', 'html');
  server.engine('html', require('hbs').__express);
  server.get('/', function (req, res) {
        console.log("ho");
    res.render('./../public/index');
  });

  server.get('/stuff', function (req, res) {
        console.log("ho");
    res.render('/asfoasfods');
  });
  // Set up routes
  //routes.init(server);
  server.use(express.static('public'));

  server.listen(3000, function () {
    console.log('Express server is up on port 3000');
  });

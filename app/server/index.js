'use strict';
const
    express = require('express'),
    bodyParser = require('body-parser'),
    exec = require('child_process').exec,
    path = require('path');
let server = express(),
    create,
    start;


  // Returns middleware that parses json
  server.use(bodyParser.json());
  // set the view engine to ejs
  server.set('view engine', 'html');
  server.engine('html', require('hbs').__express);

  server.get('/', function (req, res) {
    res.render(path.join(process.cwd(),'/public/index.html'));
  });

  server.get('/resume-pdf', function (req, res) {
    const command = "sudo gulp export";
    exec(command, function(err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
    });
  });

  // Set up routes
  //routes.init(server);
  server.use(express.static('public'));

  server.listen(4000, function () {
    console.log('Express server is up on port 4000');
  });

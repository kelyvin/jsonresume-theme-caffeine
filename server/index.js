'use strict';
const
    express = require('express'),
    bodyParser = require('body-parser');
let server = express(),
    routes = require('./routes');


// set up middleware that parses json
server.use(bodyParser.json());


////////*note remove static serve ---> serve with hbs (we do not need to create resume.html anymore)
///*figure out how to serve with the json configuration file serve through app.render({css: cssFile, resume:resume.json})

// set the view engine to support handlebars
server.set('view engine', 'html');
server.engine('html', require('hbs').__express);

//set up server
server.use(express.static('public'));
server.listen(4000, function () {
  console.log('Express server is up on port 4000');
});

//set up routes
routes.init(server);

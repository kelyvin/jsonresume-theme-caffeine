'use strict';
const path = require('path'),
      api = require('./api');

function init(server){
  server.get('/', function (req, res) {
    res.render(path.join(process.cwd(),'/public/resume.html'));
  });

  server.use('/api',api);

}


module.exports = {
  init:init
};

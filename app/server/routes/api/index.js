'use strict';
const
    express = require('express'),
    api = require(process.cwd()+'/app/server/controller/api');
let server = express();

server.get('/downloadPdf', api.toPdf);

module.exports = server;

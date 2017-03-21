'use strict';
const
    express = require('express'),
    api = require(process.cwd()+'/app/server/controller/api/download-pdf');
let server = express();

server.get('/download-pdf', api.downloadPdf);

module.exports = server;

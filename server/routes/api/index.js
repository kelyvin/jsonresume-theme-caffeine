'use strict';
const
    express = require('express'),
    api = require('../../../server/controller/api/download-pdf');
let server = express();


server.post('/download-pdf', api.downloadPdf);

module.exports = server;

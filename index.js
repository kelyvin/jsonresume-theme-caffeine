'use strict';

var fs = require('fs');
var Handlebars = require('handlebars');

function render(resume) {
    var dir = __dirname + '/public';
    var css = fs.readFileSync(dir + '/styles/main.css', 'utf-8');
    var resumeTemplate = fs.readFileSync(dir + '/views/resume.hbs', 'utf-8');

    return Handlebars.compile(resumeTemplate)({
        css: css,
        resume: resume
    });
}

module.exports = {
    render: render
};

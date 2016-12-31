'use strict';

var fs = require('fs');
var handlebars = require('handlebars');
var handlebarsWax = require('handlebars-wax');
var Handlebars = handlebarsWax(handlebars);

function render(resume) {
    var dir = __dirname + '/public';
    var css = fs.readFileSync(dir + '/styles/main.css', 'utf-8');
    var resumeTemplate = fs.readFileSync(dir + '/views/resume.hbs', 'utf-8');

    Handlebars.partials(dir + '/views/partials/**/*.{hbs,js}');
    Handlebars.partials(dir + '/views/components/**/*.{hbs,js}');

    return Handlebars.compile(resumeTemplate)({
        css: css,
        resume: resume
    });
}

module.exports = {
    render: render
};

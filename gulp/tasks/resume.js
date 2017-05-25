'use strict';
const
    gulp = require('gulp'),
    exporter= require('../../lib/exporter');

//pull json data from resume.json and render an html and pdf version of resume
gulp.task('resume', function () {
    const
        readPathResume = './app/views/resume.hbs',
        writePathResume = './public/resume.html';
    exporter.createResume(readPathResume,writePathResume,function(err){
        if(err){
            throw(err);
        }else{
            exporter.createPdf(function(err){
                if(err){
                    throw(err);
                }
            });
        }
    });
});

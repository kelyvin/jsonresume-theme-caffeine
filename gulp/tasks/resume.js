'use strict';
const
    gulp = require('gulp'),
    lib = require('../../lib');

//pull json data from resume.json and render an resume version of
gulp.task('resume', function () {
  const readPathMain = './app/views/main.hbs',
        writePathMain = './public/main.html',
        readPathResume = './app/views/resume.hbs',
        writePathResume = './public/resume.html';

  lib.createResume(readPathMain,writePathMain);
  lib.createResume(readPathResume,writePathResume);
});

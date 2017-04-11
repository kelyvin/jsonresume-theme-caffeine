'use strict';
const
    gulp = require('gulp'),
    lib = require('../../lib');

//pull json data from resume.json and render an resume version of
gulp.task('resume', function () {
  const readPath = './app/views/main.hbs',
        writePath = './public/main.html';

  lib.createResume(readPath,writePath);
});

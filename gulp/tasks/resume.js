'use strict';

const rootPath = process.cwd();

const
    gulp = require('gulp'),
    createResume = require(rootPath + '/app/lib').createResume;

//pull json data from resume.json and render an resume version of
gulp.task('resume', function () {
  console.log(rootPath);
  const readPath = rootPath + '/app/views/main.hbs',
        writePath = rootPath + '/public/main.html';

  createResume(readPath,writePath);
});

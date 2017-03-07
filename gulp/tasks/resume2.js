'use strict';

const
    gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    fs = require('fs');

    gulp.task('resume2', function () {
      //obtain render method
      const render = require(path.join(process.cwd(), packageJson.main || 'index')).render
      //need work: obtain json resume need to figure out how system decides between
      // resume.json and resume.sample.json

      //need work render with resJson
      render(resumeJson);
      fs.writeFile(path.join(process.cwd(), dir, 'index.html'), html, function(err) {
          if(err) {
              console.log(err);
          }
          cb();
      });
    });

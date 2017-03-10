'use strict';
const rootPath = process.cwd();

const
    gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    fs = require('fs'),
    path = require('path'),
    renderResume = require(path.join(rootPath +'/index')).render;


gulp.task('resume2', function () {
  //pull json data from resume.json
  fs.readFile(path.join(rootPath, '/resume.json'), function(err, resumeJson) {
    if(err){
      console.log(err);
    }else{
      //render html file for resume
      resumeJson = JSON.parse(resumeJson);
      const html = renderResume(resumeJson);
      fs.writeFile(path.join(rootPath, 'public', 'index.html'), html, function(err) {
          if(err) {
            console.log(err);
          }
      });
    }
  });
});

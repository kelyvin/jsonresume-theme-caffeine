'use strict';
const rootPath = process.cwd();

const
    gulp = require('gulp'),
    fs = require('fs'),
    renderResume = require(rootPath +'/index').render;

//pull json data from resume.json and render an resume version of
//index.html in public folder
gulp.task('resume', function () {
  fs.readFile((rootPath + '/resume.json'), function(err, resumeJson) {
    if(err){
      console.log(err);
    }else{
      const resume = renderResume(JSON.parse(resumeJson));

      fs.writeFile((rootPath +'/public/index.html'), resume,  function(err) {
          if(err) {
            console.log(err);
          }
        }
      );
    }
  });
});

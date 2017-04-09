'use strict';
const rootPath = process.cwd();

const
    fs = require('fs'),
    renderHtml = require(rootPath +'/index').render;

//compile html version of resume
function createResume(readPath, writePath ,cb){
  fs.readFile((rootPath + '/resume.json'), function(err, resumeJson) {
    if(err){
      console.log(err);
    }else{
      const resume = renderHtml(JSON.parse(resumeJson),readPath);

      fs.writeFile(writePath, resume,  function(err) {
          if(err) {
            console.log(err);
          }else{
            if(cb){
              cb();
            }
          }
        }
      );
    }
  });
}

module.exports = {
  createResume: createResume
};

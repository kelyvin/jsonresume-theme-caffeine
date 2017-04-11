'use strict';
const
    fs = require('fs'),
    pdf = require('html-pdf'),
    renderHtml = require('../index').render;

//compile html version of resume
function createResume(readPath, writePath ,cb){
  fs.readFile(('./resume.json'), function(err, resumeJson) {
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
//compile pdf version of resume
function createPdf(){
    const html = fs.readFileSync('./public/resume.html','utf-8');
    pdf.create(html, {format: 'Letter'}).toFile('./resume.pdf',function(err,res){
        if(err){
            console.log(err);
            console.log('hello');
        }else{
            console.log('ho');
            console.log(res);
        }
    });
}

module.exports = {
  createResume: createResume,
  createPdf:createPdf
};

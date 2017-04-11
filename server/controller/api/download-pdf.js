'use strict';
const exec = require('child_process').exec,
      fs = require('fs'),
      lib = require('../../../lib');

function sendPdf(req,res){
  res.download('../../../resume.pdf','resume.pdf',function(err){
    if(err){
      console.log(err);
      res.status(500).send({err:err});
    }else{
      console.log('pdf sent');
      //delete temp pdf file
      fs.unlink('../../../resume.pdf',function(err){
        if(err){
          console.log(err);
        }
      });
    }
  });
}

function downloadPdf(req,res){
  console.log('Compiling resume.pdf...');
  //create html version of resume
  lib.createResume('./public/views/resume.hbs','./public/resume.html',function(){
      lib.createPdf();
  });
  //convert html-pdf
}


module.exports = {
  downloadPdf: downloadPdf
};

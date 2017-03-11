'use strict';
const exec = require('child_process').exec,
      fs = require('fs'),
      rootPath = process.cwd();

function toPdf(req,res){
  console.log("starting html --> pdf")
  const command = 'gulp export';
  fs.stat(rootPath + '/resume.pdf',function(err,stats){
    if(err){
      exec(command, function(err, stdout, stderr) {
          console.log(stdout);
          console.log(stderr);
          if(err){
            console.log(err);
            res.status(500).send({err:err});
          }else{
            sendPdf(req,res);
          }
      });
    }else{
      sendPdf(req,res);
    }
  })
}

function sendPdf(req,res){
  res.download(rootPath + '/resume.pdf','resume.pdf',function(err){
    if(err){
      console.log(err);
      res.status(500).send({err:err});
    }else{
      console.log('pdf sent')
    }
  });
}

module.exports = {
  toPdf: toPdf
};

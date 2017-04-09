'use strict';
const exec = require('child_process').exec,
      fs = require('fs'),
      rootPath = process.cwd();

function sendPdf(req,res){
  res.download(rootPath + '/resume.pdf','resume.pdf',function(err){
    if(err){
      console.log(err);
      res.status(500).send({err:err});
    }else{
      console.log('pdf sent');
      //delete temp pdf file
      fs.unlink(rootPath + '/resume.pdf',function(err){
        if(err){
          console.log(err);
        }
      });
    }
  });
}

function downloadPdf(req,res){
  console.log('Compiling resume.pdf...');
  const command = 'gulp export';

  fs.stat(rootPath + '/resume.pdf',function(err){
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
  });
}


module.exports = {
  downloadPdf: downloadPdf
};

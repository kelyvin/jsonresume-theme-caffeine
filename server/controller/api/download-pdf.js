'use strict';
const exec = require('child_process').exec,
      fs = require('fs'),
      pdf = require('html-pdf'),
      lib = require('../../../lib');

function sendPdf(req,res){
  res.download('./resume.pdf','resume.pdf',function(err){
    if(err){
      console.log(err);
      res.status(500).send({err:err});
    }else{
      console.log('pdf sent');
      //delete temp pdf file
      fs.unlink('./resume.pdf',function(err){
        if(err){
          console.log(err);
        }
      });
    }
  });
}

function downloadPdf(req,res){
  //create pdf version of html
    lib.createPdf(function(err){
        if(err){
            console.log(err);
            res.status(500).send({err:err});
        }else{
            //send pdf to client
            sendPdf(req,res);
        }
    });
}



module.exports = {
  downloadPdf: downloadPdf
};

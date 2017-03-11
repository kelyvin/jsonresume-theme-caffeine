'use strict';
const exec = require('child_process').exec;

function toPdf(req,res){
  const command = 'gulp export';
  console.log("heyasdfasoifjsadiofjasiofjiosafjoifasjioasjio  ");
  exec(command, function(err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      if(err){
        throw err;
      }else{
        res.download(process.cwd(),'resume.pdf',function(err){
          if(err){
            console.log(err);
          }
        });
      }
  });
}

module.exports = {
  toPdf : toPdf
};

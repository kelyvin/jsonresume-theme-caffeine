'use strict';
const
    fs = require('fs'),
    pdf = require('html-pdf'),
    renderHtml = require('../index').render;

//compile html version of resume
function createResume(readPath, writePath ,callBack){
    callBack = callBack ? callBack : null;

    if (!fs.existsSync(writePath)) {
        fs.readFile(('./resume.json'), function(err, resumeJson) {
          if(err){
            console.log(err);
          }else{
            const resume = renderHtml(JSON.parse(resumeJson),readPath);

            fs.writeFile(writePath, resume,  function(err) {
                if(err) {
                    console.log(err);
                }else{
                    return callBack();
                }
              }
            );
          }
        });
    }else{
        return callBack();
    };
}
///////*note  libcreatePdf(callback,ReadPath){
///if(readPath){render pdf} else{render html}


//compile pdf version of resume
function createPdf(callBack){
    if (!fs.existsSync('./resume.pdf')) {
        const html = fs.readFileSync('./public/resume.html','utf-8');
        pdf.create(html, {format: 'Letter'}).toFile('./resume.pdf',function(err){
            if(err){
                return callBack(err);
            }else{
                return callBack(null);
            }
        });
    }else{
        return callBack(null)
    }
}

module.exports = {
  createResume: createResume,
  createPdf:createPdf
};

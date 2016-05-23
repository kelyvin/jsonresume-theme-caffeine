'use strict';
var fs = require('fs');
var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('resume', function (cb) {
    var command = 'resume serve --silent';

    if (!fs.existsSync('resume.json')) {
        command += ' --resume resume-sample.json';
    }

    exec(command, function(err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});
'use strict';

var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('resume', function (cb) {
    exec('resume serve --silent', function(err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});
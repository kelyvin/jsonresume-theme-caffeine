'use strict';
const
    gulp = require('gulp'),
    exec = require('child_process').exec;

gulp.task('unlink', function (cb) {
    let command = 'npm unlink';

    exec(command, function(err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});
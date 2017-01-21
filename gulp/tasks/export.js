'use strict';
const
    gulp = require('gulp'),
    args = require('yargs').argv,
    exec = require('child_process').exec,
    packageJson = require('../../package.json');

gulp.task('export', ['link'], function (cb) {
    let format = args.format || 'pdf',
        fileName = 'resume',
        command = 'resume export ' + fileName + ' --format ' + format,

        name = packageJson.name;

    if (name) {
        command += ' --theme ' + name;
    }

    exec(command, function(err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
        gulp.start('unlink');
    });
});
'use strict';

const
    gulp = require('gulp'),
    fs = require('fs'),
    $ = require('gulp-load-plugins')();

gulp.task('build', ['styles', 'html', 'images', 'extras'], function () {
    if (!fs.existsSync('resume.json')) {
        fs.createReadStream('resume-sample.json').pipe(fs.createWriteStream('resume.json'));
    }

    return gulp.src('public/**/*').pipe($.size({title: 'build', gzip: true}));
});

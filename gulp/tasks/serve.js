'use strict';

var gulp = require('gulp');

gulp.task('serve', ['watch'], function () {
    gulp.start('resume');
});
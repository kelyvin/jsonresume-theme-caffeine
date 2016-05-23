'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('jshint', function () {
  return gulp.src('app/js/**/*.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.jshint.reporter('fail'));
});
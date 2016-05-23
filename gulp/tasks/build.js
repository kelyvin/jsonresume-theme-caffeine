'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

//temporarily disabling jshint
gulp.task('build', ['styles', 'fonts', 'html', 'images', 'extras', 'wiredep'], function () {
  return gulp.src('public/**/*').pipe($.size({title: 'build', gzip: true}));
});
'use strict';

var gulp = require('gulp');
var cssImport = require('gulp-cssimport');
var $ = require('gulp-load-plugins')();

gulp.task('styles', function () {
  return gulp.src('app/styles/*.scss')
    .pipe($.plumber())
    .pipe($.sass().on('error', $.sass.logError))
    .pipe(cssImport())
    .pipe($.autoprefixer({browsers: ['last 1 version']}))
    .pipe(gulp.dest('public/styles'));
});
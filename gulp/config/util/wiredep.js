'use strict';

const
    gulp = require('gulp');

// inject bower components
gulp.task('wiredep', function () {
  let wiredep = require('wiredep').stream;

  gulp.src('app/styles/*.scss')
    .pipe(wiredep())
    .pipe(gulp.dest('app/styles'));
});
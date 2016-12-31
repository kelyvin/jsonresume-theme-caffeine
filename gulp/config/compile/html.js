'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('html', function() {
    var lazypipe = require('lazypipe');
    var cssChannel = lazypipe()
        .pipe($.csso);

    return gulp.src(['app/**/*.hbs'])
        .pipe($.if('*.js', $.uglify()))
        .pipe($.if('*.css', cssChannel()))
        .pipe($.useref({ searchPath: '{app, .}' }))
        .pipe(gulp.dest('public'));
});

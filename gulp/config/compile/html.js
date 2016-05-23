'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('html', function() {
    var lazypipe = require('lazypipe');
    var cssChannel = lazypipe()
        .pipe($.csso);

    var assets = $.useref.assets({ searchPath: '{app, .}' }); // search app and ./bower_components for all referenced files

    return gulp.src(['app/**/*.hbs'])
        .pipe(assets)
        .pipe($.if('*.js', $.uglify()))
        .pipe($.if('*.css', cssChannel()))
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe(gulp.dest('public'));
});

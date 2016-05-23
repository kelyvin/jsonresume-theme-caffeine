'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('fonts', function () {
    return gulp.src(require('main-bower-files')()
            .concat('app/fonts/**/*')
            .concat('bower_components/font-awesome/fonts/fontawesome-webfont.*')
        )
        .pipe($.filter('**/*.{eot,svg,ttf,woff,woff2}'))
        .pipe($.flatten())
        .pipe(gulp.dest('public/fonts'));
});
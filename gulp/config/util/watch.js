'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('watch', function() {
    var ports = {
        resumeCli: 4000,
        browserSync: 4001
    };

    browserSync.init({
        proxy: 'localhost:' + ports.resumeCli,    //resume-cli port
        reloadDelay: 300,
        port: ports.browserSync
    });

    // watch for changes
    gulp.watch([
        'public/**/*',
        'resume.json'
    ]).on('change', browserSync.reload);

    gulp.watch('app/views/**/*.hbs', ['html']);
    gulp.watch('app/images/**/*', ['images']);
    gulp.watch('app/styles/**/*.scss', ['styles']);
    gulp.watch('bower.json', ['wiredep']);
});

const
  gulp = require('gulp'),
  browserSync = require('browser-sync').create();

gulp.task('watch', function () {
  let ports = {
    serve: 3000,
    browserSync: 4001
  };

  setTimeout(function () {
    browserSync.init({
      proxy: 'localhost:' + ports.serve,
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
  }, 2500);
});

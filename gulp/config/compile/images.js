const
  gulp = require('gulp'),
  imagemin = require('gulp-imagemin'),
  $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', '!gulp-size']
});

gulp.task('images', function () {
  return gulp.src('app/images/**/*')
    .pipe($.cache(imagemin({
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('public/images'));
});
const gulp = require('gulp');

gulp.task('extras', function () {
  return gulp.src([
    'app/*.*'
  ], {
    dot: true
  }).pipe(gulp.dest('public'));
});

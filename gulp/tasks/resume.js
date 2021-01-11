const
  gulp = require('gulp'),
  fs = require('fs'),
  $ = require('gulp-load-plugins')();

const resume = () => {
  if (!fs.existsSync('resume.json')) {
    fs.createReadStream('resume-sample.json').pipe(fs.createWriteStream('resume.json'));
  }

  return gulp.src('public/**/*').pipe($.size({
    title: 'build',
    gzip: true
  }));
}

gulp.task('resume', resume);

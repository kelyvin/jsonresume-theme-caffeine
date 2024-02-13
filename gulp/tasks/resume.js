const
  gulp = require('gulp'),
  fs = require('fs'),
  $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', '!gulp-size']
  }),
  size = require('gulp-size');

const resume = (cb) => {
  if (!fs.existsSync('resume.json')) {
    fs.createReadStream('resume-sample.json')
      .pipe(fs.createWriteStream('resume.json'))
      .on('finish', cb);
  } else {
    process.nextTick(cb);
  }

  return gulp.src('public/**/*').pipe(size({
    title: 'build',
    gzip: true
  }));
}

gulp.task('resume', resume);
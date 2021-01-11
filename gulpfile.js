const gulp = require('gulp');
const HubRegistry = require('gulp-hub')

const hub = new HubRegistry(['gulp/config/util/*.js', 'gulp/config/compile/*.js', 'gulp/tasks/*.js'])
gulp.registry(hub)

const build = gulp.series('clean', 'styles', 'html', 'images', 'extras', 'resume');

gulp.task('build', build);
gulp.task('default', build);

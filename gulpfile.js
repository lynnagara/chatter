var gulp = require('gulp');
var server = require('gulp-express');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');

gulp.task('browserify', function() {
    gulp.src('apps/client/js/main.js')
      .pipe(browserify({transform: 'reactify'}))
      .pipe(concat('main.js'))
      .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function () {
	gulp.src('apps/client/index.html')
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['browserify', 'copy']);


gulp.task('watch', function () {
	gulp.watch('apps/client/**/*.*', ['default']);
});

gulp.task('server', function () {
	server.run(['apps/server/app.js']);
});
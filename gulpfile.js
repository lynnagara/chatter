var gulp = require('gulp');
var server = require('gulp-express');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var usemin = require('gulp-usemin');

gulp.task('css', function () {
	gulp.src('apps/client/style/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('dist/style'));
});

gulp.task('browserify', function() {
	gulp.src('apps/client/js/main.js')
		.pipe(browserify({transform: 'reactify'}))
		.pipe(concat('main.js'))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function () {
	gulp.src('apps/client/js/**/*')
		.pipe(gulp.dest('dist/js'));
});

gulp.task('usemin', function () {
	gulp.src('apps/client/index.html')
		.pipe(usemin({
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['copy', 'usemin', 'css']);

gulp.task('watch', function () {
	gulp.watch('apps/client/**/*.*', ['default']);
});

gulp.task('server', function () {
	server.run(['apps/server/app.js']);
});



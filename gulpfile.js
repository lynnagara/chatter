var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var usemin = require('gulp-usemin');
var node;
var spawn = require('child_process').spawn;

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
	gulp.src('apps/client/templates/**/*')
		.pipe(gulp.dest('dist/templates'));
	gulp.src('apps/client/bower_components/**/*')
		.pipe(gulp.dest('dist/bower_components'));
	gulp.src('apps/client/index.html')
		.pipe(gulp.dest('dist'));
});

gulp.task('usemin', function () {
	gulp.src('apps/client/index.html')
		.pipe(usemin({
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('node', function () {
	if (node) node.kill();
	node = spawn('node', ['app.js'], {stdio: 'inherit'})
});

gulp.task('default', ['copy', 'css']);

gulp.task('watch', function () {
	gulp.watch('apps/client/**/*.*', ['default']);
});

gulp.task('build', ['usemin']);

gulp.task('server', ['default', 'node', 'watch']);


process.on('exit', function() {
	if (node) node.kill();
});


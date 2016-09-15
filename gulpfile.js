var gulp = require('gulp');
var concat = require('gulp-concat');
var cleanMinify = require('gulp-clean-css');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var mainBowerFiles = require('gulp-main-bower-files');
var htmlMinify = require('gulp-htmlmin');

gulp.task('jadeToHTML',function(){
	return gulp.src(['!source/views/layout.jade','source/views/*.jade'])
	.pipe( jade() )
	.pipe( htmlMinify() )
	.pipe( gulp.dest('build') );
});

gulp.task('bowerStyles',function(){
	return gulp.src('bower.json')
	.pipe( mainBowerFiles('**/*.css') )
	.pipe( concat('helperStyles.css') )
	.pipe( cleanMinify() )
	.pipe( gulp.dest('build/css') );
});

gulp.task('styles',function(){
	return gulp.src('source/styles/styles.styl')
	.pipe( stylus() )
	.pipe( cleanMinify() )
	.pipe( gulp.dest('build/css') );
});

gulp.task('watch',function(){
	gulp.watch('source/styles/*.styl',['styles']);
	gulp.watch('source/views/*.jade',['jadeToHTML']);
});

gulp.task('default',['jadeToHTML','bowerStyles','styles','watch']);
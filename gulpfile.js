var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var uglify = require('gulp-uglify');//for uglify js
var cleanCSS = require('gulp-clean-css');//uglify css
var babel = require('gulp-babel');//parse es6
var reload = browserSync.reload;

gulp.task('serve', ['parseScss','parseJs','parseHtml'],function(){

	gulp.start('parseScss');
	gulp.start('parseJs');
	gulp.start('parseHtml');

	browserSync({
	  server:{
	    baseDir: './dist'
	  }
	});

});

gulp.watch(['./src/*.scss'], ['parseScss']);
gulp.watch(['./src/*.js'], ['parseJs']);
gulp.watch(['./index.html'], ['parseHtml']);

//gulp pipeline: parse, uglify, move
gulp.task('parseScss',function(){

	gulp.src(['./src/*.scss'])
	.pipe(sass().on('error', sass.logError))
	.pipe(cleanCSS())
	.pipe(gulp.dest('./dist'));

	reload();

});

gulp.task('parseHtml',function(){

	gulp.src('./index.html')
	.pipe(gulp.dest('./dist'))

	reload();

});


gulp.task('parseJs',function(){
	
	gulp.src('src/*.js')
	.pipe(babel({
		presets: ['env']
	}))
	.pipe(uglify())
	.pipe(gulp.dest('./dist'))

		reload();

});
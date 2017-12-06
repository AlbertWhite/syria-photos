var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync");
var uglify = require("gulp-uglify");
var cleanCSS = require('gulp-clean-css');
var reload = browserSync.reload;

gulp.task("serve", ["parseAndCompress"],function(){

	gulp.start("parseAndCompress");

	browserSync({
	  server:{ 
	    baseDir: "."
	  }
	});

	gulp.watch("*.html",reload);

});

gulp.watch(['./src/*.scss'], ["parseAndCompress"]); 
gulp.watch(['./src/*.js'], ["parseAndCompress"]); 

//gulp pipeline: parse, uglify, move
gulp.task("parseAndCompress",function(){ 

	gulp.src(['./src/*.scss'])
	.pipe(sass().on('error', sass.logError))
	.pipe(cleanCSS())
	.pipe(gulp.dest("./dist"));

	gulp.src('src/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('./dist'))

	reload();

});
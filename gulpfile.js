/**
 * Created by Alex on 2016/10/28.
 */

var gulp = require('gulp'),
		browserSync = require('browser-sync').create(),
		minifycss = require('gulp-minify-css'),//css压缩
		uglify = require('gulp-uglify'),//js压缩
		concat = require('gulp-concat'),//文件合并
		rename = require('gulp-rename'),//文件更名
		cdn = require('gulp-cdn-replace'),
		rev = require('gulp-rev');

var env = process.env.NODE_ENV;

gulp.task('eslint', function () {
	
})

//browser-sync
//自动刷新
gulp.task('serve',  function() {

	browserSync.init({
		server: "./src/views"
	});

	gulp.watch("src/views/*.html").on('change', browserSync.reload);
	gulp.watch("src/css/*.css").on('change', browserSync.reload);
	gulp.watch("src/js/*.js").on('change', browserSync.reload);
	gulp.watch("src/images/*.*").on('change', browserSync.reload);
});

//压缩css
gulp.task('minifycss', function() {
	return gulp.src('src/css/*.css')      //压缩的文件
		.pipe(gulp.dest('public/css'))   //输出文件夹
		.pipe(minifycss());   //执行压缩
});

//压缩js
gulp.task('minifyjs', function() {
	return gulp.src('src/js/*.js')
		.pipe(gulp.dest('public/js'))    //输出main.js到文件夹
		.pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
		.pipe(uglify())    //压缩
		.pipe(gulp.dest('public/js'));  //输出
});


gulp.task('default',['serve'])

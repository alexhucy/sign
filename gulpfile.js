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
		rev = require('gulp-rev'), //- 对文件名加MD5后缀
		revCollector = require('gulp-rev-collector'),
		replace = require('gulp-replace'),
		minifyHTML   = require('gulp-minify-html');


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
	return gulp.src('src/css/*.css')
		.pipe(replace(/\/static/g, 'http://static.baoming.xingaokaowang.cn'))
		.pipe(rev())
		.pipe(minifycss())
		.pipe(gulp.dest('public/css'))
		.pipe(rev.manifest())
		.pipe( gulp.dest( 'rev/css' ) );


});

//压缩js
gulp.task('minifyjs', function() {
	return gulp.src('src/js/*.js')
		.pipe(replace(/\/static/g, 'http://static.baoming.xingaokaowang.cn'))
		.pipe(rev())
		.pipe(uglify())
		.pipe(gulp.dest('public/js'))
		.pipe(rev.manifest())
		.pipe( gulp.dest( 'rev/js' ) );
});


gulp.task('replace-page', function () {
	return gulp.src(['rev/**/*.json','src/views/*.html'])
		.pipe(revCollector())
		.pipe(replace(/\/static/g, 'http://static.baoming.xingaokaowang.cn'))  //这里比较吃正则，每个项目的替换正则都是不一样的
		.pipe(gulp.dest('views'));
});

gulp.task('prod',['minifycss', 'minifyjs','replace-page']);


gulp.task('default',['serve'])

var gulp=require('gulp');
var sass=require('gulp-sass');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var jsmin=require('gulp-uglify');


gulp.task('buildSass',function(){
	
	//查找sass文件
	gulp.src('./app/sass/*.scss')
		// 把文档流输入出到gulp-sass进行编辑
	// 输出未压缩版本
		.pipe(sass({outputStyle:'expanded'}))
		.pipe(gulp.dest('./dist/css'))
		
		
		
	
	// 输出合并并压缩的版本
	// 合并css
	.pipe(concat('app.css'))
	// 压缩
	.pipe(sass({outputStyle:'compressed'}))
	.pipe(rename({suffix:'.min'}))
	.pipe(gulp.dest('./dist/css'))
});


gulp.task('buildJs',function(){
	
	gulp.src('./app/js/*.js')

	// 合并js
	.pipe(concat('app.js'))
	.pipe(gulp.dest('./dist/js'))

	// 压缩
	.pipe(jsmin({
		mangle:true
	}))
	.pipe(rename({suffix:'.min'}))
	.pipe(gulp.dest('./dist/js'))
});

// 全站编译
gulp.task('default',['buildSass','buildJs']);



























//gulp.task('product-detail',function(){
//	
//	gulp.src('./app/sass/product-detail.scss')
//	//输出未压缩版本
//	.pipe(sass({outputStyle:'expanded'}))
//	.pipe(gulp.dest('./app/css2'))
//	
//
//	//输出文件
//	
//	.pipe(gulp.dest('./app/css2'))
//	
//	
//});
//
//gulp.task('common',function(){
//	
//	gulp.src('./app/sass/common.scss')
//	//输出未压缩版本
//	.pipe(sass({outputStyle:'expanded'}))
//	.pipe(gulp.dest('./app/css2'))
//	
//
//	//输出文件
//	
//	.pipe(gulp.dest('./app/css2'))
//	
//	
//});
//
//
//gulp.task('gold',function(){
//	
//	gulp.src('./app/sass/gold.scss')
//	//输出未压缩版本
//	.pipe(sass({outputStyle:'expanded'}))
//	.pipe(gulp.dest('./app/css2'))
//	
//
//	//输出文件
//	
//	.pipe(gulp.dest('./app/css2'))
//	
//	
//});
//gulp.task('goodslist',function(){
//	
//	gulp.src('./app/sass/goodslist.scss')
//	//输出未压缩版本
//	.pipe(sass({outputStyle:'expanded'}))
//	.pipe(gulp.dest('./app/css2'))
//	
//
//	//输出文件
//	
//	.pipe(gulp.dest('./app/css2'))
//	
//	
//});
//gulp.task('index',function(){
//	
//	gulp.src('./app/sass/index.scss')
//	//输出未压缩版本
//	.pipe(sass({outputStyle:'expanded'}))
//	.pipe(gulp.dest('./app/css2'))
//	
//});
//gulp.task('myList',function(){
//	
//	gulp.src('./app/sass/myList.scss')
//	//输出未压缩版本
//	.pipe(sass({outputStyle:'expanded'}))
//	.pipe(gulp.dest('./app/css2'))
//	
//
//	//输出文件
//	
//	.pipe(gulp.dest('./app/css2'))
//	
//	
//});
//gulp.task('myInfo',function(){
//	
//	gulp.src('./app/sass/myInfo.scss')
//	//输出未压缩版本
//	.pipe(sass({outputStyle:'expanded'}))
//	.pipe(gulp.dest('./app/css2'))
//	
//
//	//输出文件
//	
//	.pipe(gulp.dest('./app/css2'))
//	
//	
//});
//gulp.task('personCenter',function(){
//	
//	gulp.src('./app/sass/personCenter.scss')
//	//输出未压缩版本
//	.pipe(sass({outputStyle:'expanded'}))
//	.pipe(gulp.dest('./app/css2'))
//	
//
//	//输出文件
//	
//	.pipe(gulp.dest('./app/css2'))
//	
//	
//});
//
//
//gulp.task('shoppingCar',function(){
//	
//	gulp.src('./app/sass/shoppingCar.scss')
//	//输出未压缩版本
//	.pipe(sass({outputStyle:'expanded'}))
//	.pipe(gulp.dest('./app/css2'))
//	
//
//	//输出文件
//	
//	.pipe(gulp.dest('./app/css2'))
//	
//	
//});
//gulp.task('buildcss',function(){
//	gulp.src('./app/css2/*.css')
//
//	// 合并js
//	.pipe(concat('app.css'))
//	.pipe(gulp.dest('./dist/css'))
//
//	// 压缩
//	.pipe(jsmin({
//		mangle:true
//	}))
//	.pipe(rename({suffix:'.min'}))
//	.pipe(gulp.dest('./dist/css'))
//
//
//});
//
////全站编译
//
// gulp.task('default',['buildcss','product-detail','gold','shoppingCar','personCenter','myInfo','myList','index','goodslist','common']);

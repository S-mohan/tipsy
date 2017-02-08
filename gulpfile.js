const gulp = require('gulp')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const clean = require('gulp-clean')
const plumber = require('gulp-plumber')
const cleanCss = require('gulp-clean-css')
const autoprefixer = require('gulp-autoprefixer')

const CONFIGS = {
	sass: {
		sourceComments: false,
		outputStyle: 'expanded'
	},
	css: {
		advanced: true, //合并选择器
		keepBreaks: false, //不保留换行符
		mediaMerging: true, //合并@media
		keepSpecialComments: '*' //保留浏览器前缀
	},
	autoprefixer: {
		browsers: ['last 2 versions', 'Android >= 4.0'],
		cascade: true, //是否美化属性值 默认：true
		remove: true //是否去掉不必要的前缀 默认：true
	}
}

gulp.task('compile:sass', () => {
	return gulp.src('./src/**/*.scss')
		.pipe(sass(CONFIGS.sass))
		.pipe(plumber())
		.pipe(autoprefixer(CONFIGS.autoprefixer))
		.pipe(gulp.dest('./dist'))
})

gulp.task('min:css', () => {
	return gulp.src('./src/**/*.scss')
		.pipe(sass(CONFIGS.sass))
		.pipe(plumber())
		.pipe(autoprefixer(CONFIGS.autoprefixer))
		.pipe(cleanCss(CONFIGS.css))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('./dist'))
})

gulp.task('watch', () => {
	gulp.watch('./src/**/*.scss', ['compile:sass'])
})

gulp.task('default', ['min:css']);
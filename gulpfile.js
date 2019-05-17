const gulp = require('gulp');
const less = require('gulp-less');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');

function watch(){
	browserSync.init({
        server: {
            baseDir: "./"
        }
    });
	gulp.watch('less/**/*.less', styles);
	gulp.watch('./*.html').on('change', browserSync.reload);
}

function styles(){
	return gulp.src('less/**/*.less')
			.pipe(plumber())
			.pipe(less())
			.pipe(autoprefixer({
	            browsers: ['last 2 versions'],
	            cascade: false
        	}))
			.pipe(gulp.dest('css/'))
			.pipe(browserSync.stream());
}

gulp.task('watch', watch);

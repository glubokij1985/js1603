var gulp = require('gulp'),
	concatCss = require('gulp-concat-css'),
	cssmin = require('gulp-cssmin'),
	rename = require('gulp-rename');

gulp.task('concat', function () {
  return gulp.src('public/css/*.css')
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('public/build/'));
});
gulp.task('css', function () {
  return gulp.src('public/css/*.css')
    .pipe(concatCss("bundle.css"))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('public/build/'));
});
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function () {
    return gulp.src('./static/styles/styles.scss')
        .pipe(
            sass({ includePaths: ['./node_modules/bootstrap/scss', './node_modules/bootstrap-icons/font'] })
                .on('error', sass.logError))
        .pipe(gulp.dest('./static/styles'));
});

gulp.task('fonts', () => {
    return gulp.src('./node_modules/bootstrap-icons/font/fonts/*').pipe(gulp.dest('./static/styles/fonts'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./static/styles/**/*.scss', gulp.parallel('sass'));
});

gulp.task('build', gulp.parallel('fonts', 'sass'));
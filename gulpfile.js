// including plugins
let gulp = require('gulp');
let minifyHtml = require('gulp-minify-html');
let minifyCss = require('gulp-minify-css');

gulp.task('minify-html', function () {
    gulp.src('./content/*.html') // path to your files
        .pipe(minifyHtml())
        .pipe(gulp.dest('./content'));
});

gulp.task('minify-css', function () {
    gulp.src('./content/*.css') // path to your files
        .pipe(minifyCss())
        .pipe(gulp.dest('./content'));
});

gulp.task('default', ['minify-html', 'minify-css'], function () {});

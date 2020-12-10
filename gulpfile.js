var gulp = require('gulp');
var uglifycss = require('gulp-uglifycss');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var watch = require('gulp-watch');

gulp.task('codigo', function () {
    return gulp.src('dev/styles/*.css')
    .pipe(concat('all.min.css'))
    .pipe(uglifycss())
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('imagem', function() {
    return gulp.src('dev/imagens/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/imagens'))
});

gulp.task('monitorar',function() {
    return gulp.watch(['./dev/*/*'],gulp.series('codigo','imagem'))
});

gulp.task('default',gulp.series('codigo','imagem','monitorar'));
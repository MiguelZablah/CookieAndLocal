const gulp = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const babel = require('gulp-babel');

gulp.task('build', function() {
    gulp.src('src/js/*.js')
        .pipe(concat('cookiesandlocal.js'))
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(minify())
        .pipe(gulp.dest('dist/'));
});

gulp.task('buildLocal', function() {
    gulp.src('src/js/localStorage-controller.js')
        .pipe(concat('localStorage.js'))
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(minify())
        .pipe(gulp.dest('dist/'));
});

gulp.task('buildCookie', function() {
    gulp.src('src/js/cookie-controller.js')
        .pipe(concat('cookies.js'))
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(minify())
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['build', 'buildLocal', 'buildCookie']);
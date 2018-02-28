const gulp = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const babel = require('gulp-babel');

gulp.task('JoinCookieLocal', function() {
    gulp.src('src/js/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('cookieAndLocal.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('MinifyCookieAndLocal', function() {
    gulp.src('src/js/*.js')
        .pipe(concat('cookieAndLocal.js'))
        .pipe(minify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['JoinCookieLocal', 'MinifyCookieAndLocal']);
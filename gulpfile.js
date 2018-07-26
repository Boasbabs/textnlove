const gulp = require('gulp');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');

gulp.task('css', function () {
    gulp.src('./assets/css/*.css')
        .pipe(uglifycss({
            "uglyComments": true
        }))
        .pipe(gulp.dest('./assets/dist/'));
});


gulp.task('sass', function () {
    return gulp.src('./assets/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css/'));
});


gulp.task('run', ['sass', 'css']);

gulp.task('watch', function () {
    gulp.watch('./assets/sass/*.scss', ['sass']);
    gulp.watch('./assets/css/*.css', ['css'])
});

gulp.task('default', ['run', 'watch']);

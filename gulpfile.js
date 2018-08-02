const gulp = require('gulp');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');
const livereload = require('gulp-livereload');
const htmlmin = require('gulp-htmlmin');
const surge = require('gulp-surge')


// Task to minify HTML
// TODO: Minify HTML
gulp.task('html', function() {
    return gulp.src('./*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        // .pipe(gulp.dest('./'))
        .pipe(livereload());
});


// Task to minify CSS
gulp.task('css', function () {
    gulp.src('./assets/css/*.css')
        .pipe(uglifycss({
            "uglyComments": true
        }))
        .pipe(gulp.dest('build'))
        .pipe(livereload());
});


// Task to compile SASS
gulp.task('sass', function () {
    return gulp.src('./assets/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css/'));
});

// Task to deploy to Surge
gulp.task('deploy', [], function () {
    return surge({
        project: './',         // Path to your static build directory
        domain: 'textnwin-demo.surge.sh'  // Your domain or Surge subdomain
    })
})

gulp.task('run', ['sass', 'css', 'html']);

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('./*.html', ['html']);
    gulp.watch('./assets/sass/*.scss', ['sass']);
    gulp.watch('./assets/css/*.css', ['css'])
});

gulp.task('default', ['run', 'watch']);

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var sassLint = require('gulp-sass-lint');

// Gulp Sass Task
gulp.task('sass', function() {
    gulp.src('./src/{,*/}*.{scss,sass}')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('sass-lint', function () {
    return gulp.src('./src/**/*.s+(a|c)ss')
        .pipe(sassLint({
            configFile: '.sass-lint.yml'
        }))
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError())
});

gulp.task('default', ['sass-lint', 'sass'], function () {
    // gulp.watch('./src/{,*/}*.{scss,sass}', ['sass'])
});

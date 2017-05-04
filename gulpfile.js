var gulp = require('gulp'),
    sass = require('gulp-sass'),
  // concat = require('gulp-concat'),
  // jshint = require('gulp-jshint'),
    autoprefixer = require('gulp-autoprefixer')
// uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    rename = require("gulp-rename");

// Compile Sass to css and place it in css/styles.css
gulp.task('styles', function() {
  return gulp.src('sass/*.scss')
    .pipe(sass({
      'sourcemap=none': true
    }))
    .pipe(autoprefixer('last 2 version', 'ie 9'))
    .pipe(gulp.dest('css/'))
});

// Watch for changes in scss files
// Watch for errors in js file
gulp.task('watch', function() {
    gulp.watch('sass/**/*.scss', ['styles']);
  // gulp.watch('js/*.js', ['jshint', 'compress']);
});

// Catch JS errors
/*
gulp.task('jshint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
});*/



// Ugligy JS

/*
gulp.task('compress', function() {
  return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('js'));
});*/



// Minify CSS
gulp.task('minify-css', function() {
  return gulp.src('css/style.css')
  	.pipe(rename({suffix: ".min"}))
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('css'));
});

// All tasks together
gulp.task('default', ['styles', 'watch']);

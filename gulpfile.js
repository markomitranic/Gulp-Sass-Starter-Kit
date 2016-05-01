// The input SCSS files and the SCSS output path
var scssInput = [
	'scss/style.scss',
	'scss/print.scss'
	];
var scssOutput = 'app/css';

// Start everything up.
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');


// Watch SASS.
gulp.task('sass', function() {
  return gulp.src(scssInput)
    .pipe(sass())
	.pipe(autoprefixer())
    .pipe(gulp.dest(scssOutput))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Spin up server and reload.
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})


gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('scss/**/*.scss', ['sass']); 
  gulp.watch('app/*.html', browserSync.reload); 
  gulp.watch('app/js/**/*.js', browserSync.reload); 
});
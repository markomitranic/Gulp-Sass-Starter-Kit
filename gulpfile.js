const scssInput = ['scss/style.scss'],
    scssOutput = 'app/css',
    vendorInput = [
        'scripts/vendor/*.js'
    ],
    jsInput = [
        'scripts/domain/*.js'
    ],
    jsOutput = 'app/scripts';

// Start everything up.
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();
const plumber = require('gulp-plumber');


// Watch SASS.
gulp.task('sass', function() {
    return gulp
        .src(scssInput)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(scssOutput))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('domainScripts', function() {
    return gulp.src(jsInput)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(jsOutput))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(jsOutput));
});

gulp.task('vendorScripts', function() {
    return gulp.src(vendorInput)
        .pipe(plumber())
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(jsOutput));
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
})

gulp.task('watch', ['sass', 'domainScripts', 'vendorScripts', 'browserSync'], function (){
    gulp.watch('scss/**/*.scss', ['sass', browserSync.reload]);
    gulp.watch('app/**/*.html', browserSync.reload);
    gulp.watch('scripts/domain/**/*.js', ['domainScripts', browserSync.reload]);
    gulp.watch('scripts/vendor/**/*.js', ['vendorScripts', browserSync.reload]);
});

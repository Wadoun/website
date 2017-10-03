var gulp = require('gulp');
var gulpsass = require('gulp-sass');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

gulp.task('sass', function() {
  return gulp.src('./assets/sass/styles.scss')
    .pipe(sourcemaps.init())
    .pipe(gulpsass({outputStyle: 'compressed'}).on('error', gulpsass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('scripts:vendor', function() {
  return gulp.src('./assets/javascript/vendor/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(concat('components.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public/js'));
})

gulp.task('scripts:modules', function() {
  return gulp.src('./assets/javascript/modules/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(concat('index.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public/js'));
})

gulp.task('watch', function () {
  gulp.watch('./assets/sass/**/*.scss', gulp.series('sass'));
  gulp.watch('./assets/javascript/vendor/**/*.js', gulp.series('scripts:vendor'));
  gulp.watch('./assets/javascript/modules/**/*.js', gulp.series('scripts:modules'));
});

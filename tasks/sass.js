var gulp = require('gulp');
var sass = require('gulp-sass');
var bs = require('browser-sync');
var reload = bs.reload;

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'))
    .pipe(reload({stream:true}));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

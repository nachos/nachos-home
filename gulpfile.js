/** Regular npm dependendencies */
var gulp = require('gulp');
var stylish = require('jshint-stylish');
var lazypipe = require('lazypipe');
var runSequence = require('run-sequence');
var open = require('open');

/** Gulp dependencies */
var gutil = require('gulp-util');
var bump = require('gulp-bump');
var mocha = require('gulp-mocha');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

/** Reusable functions */

function jshintPipe(jshintrc) {
  return lazypipe()
    .pipe(jshint, jshintrc)
    .pipe(jshint.reporter, stylish)
    .pipe(jshint.reporter, 'fail')();
}
/** Gulp tasks */

gulp.task('default', ['test']);

gulp.task('test', function () {
  runSequence(
    'jshint:all',
    'mocha',
    function () {
      process.exit(0);
    });
});

gulp.task('jshint:all', ['jshint', 'jshint:test', 'jshint:gulpfile']);

gulp.task('jshint', function () {
  return gulp.src(['lib/**/*.js'])
    .pipe(jshintPipe('.jshintrc'));
});

gulp.task('jshint:test', function () {
  return gulp.src(['test/**/*.js'])
    .pipe(jshintPipe('.spec.jshintrc'));
});

gulp.task('jshint:gulpfile', function () {
  return gulp.src('gulpfile.js')
    .pipe(jshintPipe('.jshintrc'));
});

gulp.task('jscs:all', ['jscs', 'jscs:test', 'jscs:gulpfile']);

gulp.task('jscs', function () {
  return gulp.src('lib/**/*.js')
    .pipe(jscs());
});

gulp.task('jscs:test', function () {
  return gulp.src('./test/**/*.js')
    .pipe(jscs());
});

gulp.task('jscs:gulpfile', function () {
  return gulp.src('./gulpfile.js')
    .pipe(jscs());
});

gulp.task('mocha', ['env:test', 'env:local'], function (cb) {
  gulp.src('test/**/*.spec.js', {read: false})
    .pipe(mocha({reporter: 'spec'}))
    .on('error', function (err) {
      gutil.log(err.toString());
    })
    .once('end', function () {
      cb();
    });
});

gulp.task('bump', function () {
  gulp.src(['./package.json'])
    .pipe(bump({type: 'patch'}))
    .pipe(gulp.dest('./'));
});

gulp.task('bump:minor', function () {
  gulp.src(['./package.json'])
    .pipe(bump({type: 'minor'}))
    .pipe(gulp.dest('./'));
});

gulp.task('bump:major', function () {
  gulp.src(['./package.json'])
    .pipe(bump({type: 'major'}))
    .pipe(gulp.dest('./'));
});
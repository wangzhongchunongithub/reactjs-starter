/**
 * Created by wangzhongchun on 6/17/2016.
 */
var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    webpack = require('gulp-webpack'),
    rename = require('gulp-rename'),
    del = require('del'),
    react = require('gulp-react'),
    babel = require('gulp-babel'),
    nodemon = require('gulp-nodemon'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat');

var webpackConfig = require('./config/webpack.config');

gulp.task("webpack", function() {
    return gulp
        .src('./src')
        .pipe(webpack(webpackConfig))
        .pipe(uglify({
            compress: true,
            preserveComments: 'none'
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('clean', function(cb) {
    del(['dist/*.js','dist/*.css'], cb)
});

gulp.task('startServer_buildAll',
    ['bundleLibs','minifyCss','webpack'],
    function () {
    nodemon({ script: './src/server/index.js', ext: 'js' })
        .on('start',function(){
            console.log('starting server...');
        })
        .on('restart', function () {
            console.log('restarted!');
        });
});

gulp.task('startServer_buildCssAndComponent',
    ['minifyCss','webpack'],
    function () {
    nodemon({ script: './src/server/index.js', ext: 'js' })
        .on('start',function(){
            console.log('starting server...');
        })
        .on('restart', function () {
            console.log('restarted!');
        });
});

gulp.task('startServer_buildOnlyComponent',
    ['webpack'],
    function () {
    nodemon({ script: './src/server/index.js', ext: 'js' })
        .on('start',function(){
            console.log('starting server...');
        })
        .on('restart', function () {
            console.log('restarted!');
        });
});

gulp.task('startServer_buildOnlyCss',
    ['minifyCss'],
    function () {
    nodemon({ script: './src/server/index.js', ext: 'js' })
        .on('start',function(){
            console.log('starting server...');
        })
        .on('restart', function () {
            console.log('restarted!');
        });
});

gulp.task('minifyCss',
    function() {
    return gulp.src(['./src/client/styles/*.css','./src/client/styles/external/*.css'])
        .pipe(minifycss())
        .pipe(concat('styles.css'))
        .pipe(minifycss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('bundleLibs',
    function(){
    return gulp.src(['./libs/react-with-addons.min.js','./libs/jquery.min.js'])
        .pipe(concat('libs.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist'));
});
var gulp = require('gulp');
var less = require('gulp-less');
var rename = require('gulp-rename');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cssmin = require('gulp-clean-css');
var htmlmin = require('gulp-minify-html');

gulp.task('server',function(){
    connect.server({
        root:'src',
        port:8090,
        livereload:true
    })
})

gulp.task('cssMin',function(){
    .src('./css/style.css')
    .pipe(cssmin())
    .dest('./dis/min.css')
})

gulp.task('defult',[server,cssMin]);

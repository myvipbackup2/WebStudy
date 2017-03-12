/**
 * Created by lizixiang on 2017/3/12.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('test1', function () {
    console.log('haha');
});

gulp.task('test2', function () {
    console.log('Hello Word!');
});

gulp.task('default', ['test1', 'test2']); //default任务可以直接使用gulp命令调用 gulp （default）

//pipe大管道，所有的操作都要通过pipe  dest代表把处理好的文件放在目标位置  watch监测文件
gulp.task('task1', function () {
    gulp.src('index.html').pipe(gulp.dest('./dest')).pipe(connect.reload());
});

//监测html变化
gulp.task('watch-html', function () {
    gulp.watch('index.html', ['task1']);
});

gulp.task('copy-img', function () {
    gulp.src('./src/img/**/*.png').pipe(gulp.dest('./dest/img'));
});

gulp.task('sass', function () {
    gulp.src('./src/*.scss').pipe(sass()).pipe(gulp.dest('./dest/css'));
});

//创建一个本地服务
gulp.task('server', function () {
    connect.server({
        root: 'dest',
        port: '8088', //不写默认8080
        livereload: true
    })
});

gulp.task('run', ['server', 'watch-html']);
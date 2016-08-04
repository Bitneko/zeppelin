var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({ pattern: ['gulp-*', 'gulp.*', 'imagemin-*', 'del', 'foldero', 'main-bower-files'] });
var browserSync = require('browser-sync').create();
var pngquant = require('imagemin-pngquant');
var fs = require('fs');
var del = require('del');
var pkg = JSON.parse(fs.readFileSync('./package.json'));
var cleanCSS = require('gulp-clean-css');

plugins.del = del;
plugins.fs = fs;
plugins.cleanCSS = cleanCSS;

/**
 * BrowserSync
 */
gulp.task('browserSync', require('./tasks/browser-sync')(gulp, plugins, browserSync, pkg));

/**
 * Rsync Tasks
 */
gulp.task('rsync[images]', require('./tasks/rsync/images')(gulp, plugins, pkg));
gulp.task('rsync[javascripts]', require('./tasks/rsync/javascripts')(gulp, plugins, pkg));
gulp.task('rsync[server]', require('./tasks/rsync/server')(gulp, plugins, pkg));
gulp.task('rsync[fonts]', require('./tasks/rsync/fonts')(gulp, plugins, pkg));

/**
 * Copy
 */
gulp.task('copy', require('./tasks/copy')(gulp, plugins, pkg));

/**
 * Copy(Distro)
 */
gulp.task('copy-dist', require('./tasks/copy-dist')(gulp, plugins, pkg));

/**
 * Pug
 */
gulp.task('pug', require('./tasks/pug')(gulp, plugins, pkg));
gulp.task('pug-watch', ['pug'], function(){ 
    browserSync.reload();
});

/**
 * Sass Tasks
 */
gulp.task('sass', require('./tasks/sass')(gulp, plugins, pkg, browserSync));
gulp.task('sass-compressed', require('./tasks/sass')(gulp, plugins, pkg, browserSync, 'compressed'));
gulp.task('scss-lint', require('./tasks/scss-lint')(gulp, plugins, pkg));

/**
 * Bower Task
 */
gulp.task('bower', require('./tasks/bower')(gulp, plugins, pkg));

/**
 * Javascript Concatenation
 */
gulp.task('concat', require('./tasks/concat')(gulp, plugins, pkg));

/**
 * Javascript Uglification and Concatenation
 */
gulp.task('uglify', require('./tasks/uglify')(gulp, plugins, pkg));

/**
 * JS Linting
 */
gulp.task('jshint', require('./tasks/jshint')(gulp, plugins, pkg));

/**
 * Watch task
 */
gulp.task('watch', require('./tasks/watch')(gulp, plugins, browserSync, pkg));

/**
 * Imagemin Task
 */
gulp.task('imagemin', require('./tasks/imagemin')(gulp, plugins, pkg, pngquant));

/**
 * Clean Distro Task
 */
gulp.task('clean', require('./tasks/clean')(gulp, plugins, pkg));

/**
 * Default
 */
gulp.task('default', [
        'copy',
        'pug',
        'sass',
        'concat'
    ]);

/**
 * Static
 */
gulp.task('static', [
        'copy',
        'pug',
        'concat'
    ]);

/**
 * Distro
 */
gulp.task('dist', [
        'copy-dist',
        'pug',
        'sass-compressed',
        'uglify',
        'imagemin'
    ]);

/**
 * Validate
 */
gulp.task('validate', ['scss-lint', 'jshint']);

/**
 * Watch
 */
gulp.task('serve', ['browserSync','watch']);

/**
 * Strip Media Queries
 */
gulp.task('unmq', require('./tasks/unmq')(gulp, plugins, pkg));

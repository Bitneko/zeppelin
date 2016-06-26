module.exports = function (gulp, plugins, pkg, browserSync, outputStyle) {

    var outputStyle = outputStyle || 'nested',
        config  = pkg.config,
        dir     = config.directories,
        dest    = config.baseUrl + dir.destination,
        baseDir = config.baseUrl + dir.styles;

    return function () {

        return gulp.src(baseDir + '/**/*.s+(a|c)ss')
                .pipe(plugins.sass({outputStyle})
                .on('error', plugins.sass.logError))
                .pipe(plugins.cleanCSS({keepSpecialComments: 0}))
                .pipe(gulp.dest(dest + '/assets/' + pkg.name + '/css'))
                .pipe(browserSync.stream());
    }
}
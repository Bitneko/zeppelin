module.exports = function (gulp, plugins, pkg, pngquant) {

    var config = pkg.config,
        dir    = config.directories,
        dest   = config.baseUrl + dir.destination;

    return function () {

        return gulp.src(config.baseUrl + dir.images + '/**/*')
            .pipe(plugins.imagemin({
                progressive: true,
                svgoPlugins: [
                    {removeViewBox: false},
                    {cleanupIDs: false}
                ],
                use: [pngquant()]
            }))
            .pipe(gulp.dest(dest + '/assets/'+ pkg.name  + '/img'));
    }
}
module.exports = function (gulp, plugins, pkg) {

    var config = pkg.config,
        dir    = config.directories,
        dest   = config.baseUrl + dir.destination;

    return function () {

        return gulp.src(config.baseUrl + dir.server)
            .pipe(plugins.rsync({
                destination: dest,
                incremental: true,
                recursive: true,
                root: dir.server
            }));
    }
}
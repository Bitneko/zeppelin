module.exports = function (gulp, plugins, pkg) {

    var config = pkg.config,
        dir    = config.directories,
        dest   = config.baseUrl + dir.destination;

    return function () {

        return gulp.src(config.baseUrl + dir.images)
            .pipe(plugins.rsync({
                destination: dest + '/assets/'+ pkg.name  + '/img',
                incremental: true,
                recursive: true,
                root: dir.images
            }));
    }
}
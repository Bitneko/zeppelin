module.exports = function (gulp, plugins, pkg) {

    var es = require('event-stream');

    var config = pkg.config,
        dir    = config.directories,
        dest   = config.baseUrl + dir.destination;

    return function () {

        var ico = gulp.src(config.baseUrl + dir.icomoon)
            .pipe(plugins.rsync({
                destination: dest + '/assets/'+ pkg.name  + '/fonts',
                incremental: true,
                recursive: true,
                root: dir.icomoon
            }));

        var fonts = gulp.src(config.baseUrl + dir.fonts)
            .pipe(plugins.rsync({
                destination: dest + '/assets/'+ pkg.name  + '/fonts',
                incremental: true,
                recursive: true,
                root: dir.fonts
            }));

        return es.merge(ico,fonts);
    }
}
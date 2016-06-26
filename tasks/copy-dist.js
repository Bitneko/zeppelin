module.exports = function (gulp, plugins, pkg) {

    var es = require('event-stream');

    var config = pkg.config,
        dir    = config.directories,
        dest   = config.baseUrl + dir.destination;

    return function () {

        var icomoonSync = gulp.src(config.baseUrl + dir.icomoon + '/**/*')
            .pipe(gulp.dest(dest + '/assets/'+ pkg.name  + '/fonts'))

        var fontSync = gulp.src(config.baseUrl + dir.fonts + '/**/*')
            .pipe(gulp.dest(dest + '/assets/'+ pkg.name  + '/fonts'));

        var serverSync = gulp.src(config.baseUrl + dir.server + '/**/*')
            .pipe(gulp.dest(dest))

        return es.merge(icomoonSync,fontSync, serverSync);
    }
}
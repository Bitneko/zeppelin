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

        var imageSync = gulp.src(config.baseUrl + dir.images + '/**/*')
            .pipe(gulp.dest(dest + '/assets/'+ pkg.name  + '/img'))

        var jsSync = gulp.src(config.baseUrl + dir.scripts + '/vendor' + '/**/*')
            .pipe(gulp.dest(dest + '/assets/'+ pkg.name +'/js/vendor'))

        var serverSync = gulp.src(config.baseUrl + dir.server + '/**/*')
            .pipe(gulp.dest(dest))

        return es.merge(icomoonSync,fontSync, imageSync, jsSync, serverSync);
    }
}
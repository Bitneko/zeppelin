module.exports = function (gulp, plugins, pkg) {

    var config = pkg.config,
        dir    = config.directories,
        dest   = config.baseUrl + dir.destination;

    return function () {

       return gulp.src(config.baseUrl + dir.scripts + '/vendor')
            .pipe(plugins.rsync({
                destination: dest + '/assets/'+ pkg.name +'/js/vendor',
                incremental: true,
                recursive: true,
                root: dir.scripts  + '/vendor/'
            }));
    }
}
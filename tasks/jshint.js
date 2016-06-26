module.exports = function (gulp, plugins, pkg) {

    var config = pkg.config,
        dir    = config.directories,
        dest   = config.baseUrl + dir.destination,
        baseDir = config.baseUrl + dir.scripts;

    return function () {

        return gulp.src([
            baseDir + '/**/*.js',
            '!'+ baseDir +'/**/*.min.js',
            '!'+ baseDir +'/plugins/vendor/**/*.js',
            '!'+ baseDir +'/vendor/**/*.js'
        ])
            .pipe(plugins.jshint())
            .pipe(plugins.jshint.reporter('default'));
    }
}
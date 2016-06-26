module.exports = function (gulp, plugins, pkg) {

    var config  = pkg.config,
        dir     = config.directories,
        dest    = config.baseUrl + dir.destination,
        baseDir = config.baseUrl + dir.styles;

    return function () {
        return gulp.src(baseDir + '/**/*.s+(a|c)ss')
                .pipe(plugins.scssLint({ 'config': config.scssLinter }));
        }
}
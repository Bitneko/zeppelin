module.exports = function (gulp, plugins, pkg) {

    var config  = pkg.config,
        dir     = config.directories,
        dest    = config.baseUrl + dir.destination;

    return function () {
        return gulp.src(dest + '/assets/' + pkg.name + '/css/'+ pkg.name + '.css')
            .pipe( plugins.postcss([
                    require('postcss-unmq')({ width: 1024 })
                ])
            )
            .pipe(plugins.rename(pkg.name + '-legacy.css'))
            .pipe(
                gulp.dest(dest + '/assets/' + pkg.name + '/css')
            );
    }
}
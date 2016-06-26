module.exports = function (gulp, plugins, pkg) {

    var config = pkg.config,
        dir    = config.directories,
        dest   = config.baseUrl + dir.destination,
        baseDir = config.baseUrl + dir.scripts;

    return function () {

        return gulp.src([
                dest + '/assets/' +  pkg.name + '/libs/matchMedia/matchMedia.js',
                dest + '/assets/' +  pkg.name + '/libs/matchMedia/matchMedia.addListener.js',
                dest + '/assets/' +  pkg.name + '/libs/**/*.js',
                baseDir + '/plugins/vendor/shims.js',
                baseDir + '/plugins/vendor/**/*.js',
                baseDir + '/plugins/**/*.js',
                baseDir + '/modules/**/*.js',
                baseDir + '/*.js',
                baseDir + '/main.js'
            ])
            .pipe(plugins.concat(pkg.name + '.js', {newLine: ';'}))
            .pipe(gulp.dest(dest + '/assets/' +  pkg.name +'/js'));
    }
}
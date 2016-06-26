module.exports = function (gulp, plugins, pkg) {

    var es = require('event-stream');

    var config  = pkg.config,
        dir     = config.directories,
        dest    = config.baseUrl + dir.destination,
        baseDir = config.baseUrl + dir.scripts

    return function() {

        var taskScripts = gulp.src([
            baseDir + '/plugins/**/*.js',
            baseDir + '/modules/**/*.js',
            baseDir + '/*.js',
            '!' + baseDir + '/vendor/**/*.js'
        ])
            .pipe(plugins.uglify())
            .pipe(plugins.concat(pkg.name + '.min.js', {newLine: ';'}))
            .pipe(gulp.dest(dest + '/assets/' +  pkg.name +'/js'));

        var taskVendor = gulp.src([
            baseDir + '/vendor/**/*.js',
        ])
            .pipe(gulp.dest(dest + '/assets/' +  pkg.name +'/js/vendor'))
            .on('end', function(){
                gulp.src([
                    dest + '/assets/' +  pkg.name +'/js/vendor/**/*.js'
                ])
                    .pipe(plugins.uglify())
                    .pipe(gulp.dest(dest + '/assets/' +  pkg.name +'/js/vendor'));
            });

        return es.merge(taskScripts,taskVendor);
    }
}

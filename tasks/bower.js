module.exports = function (gulp, plugins, pkg) {

    var config = pkg.config,
        dir    = config.directories,
        dest   = config.baseUrl + dir.destination;

    return function () {

        return plugins.bower()
            .on('end', function(){
                gulp.src(plugins.mainBowerFiles({group: 'plugins'}), { base: './bower_components' })
                    .pipe(gulp.dest(dest + '/assets/' +  pkg.name +'/libs'));


                gulp.src(plugins.mainBowerFiles({group: 'vendor'}), { base: './bower_components' })
                    .pipe(gulp.dest(dest + '/assets/' +  pkg.name +'/js/vendor'));
            });
    }
}
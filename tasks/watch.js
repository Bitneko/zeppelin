module.exports = function (gulp, plugins, browserSync, pkg) {

    /**
     * Note: Use relative path to detech new/deleted files
     */
    var config = pkg.config,
        dir    = config.directories,
        dest   = dir.destination,
        syncTimer;

    return function () {
        
        // Watch for changes in server side files
        gulp.watch(dir.server + '/**/*', ['rsync[server]']);

        // Watch for changes in images
        gulp.watch(dir.images + '/**/*', ['rsync[images]']);

        // Watch for changes in fonts
        gulp.watch([
                dir.fonts,
                dir.icomoon
            ],
            ['rsync[fonts]']
        );

        // Watch for changes in javascript files
        gulp.watch(dir.scripts + '/vendor/**/*', ['rsync[javascripts]']);

        gulp.watch([
                dir.scripts + '/**/*.js',
                '!' + dir.scripts +'/vendor/**/*.js'
            ],
            ['jshint', 'concat']
        );

        // Watch for changes in scss files
        gulp.watch(dir.styles + '/**/*.scss', ['sass', 'scss-lint']);

        // Watch for changes in pug templates
        gulp.watch(dir.pug + '/**/*.pug', ['pug-watch']);

        // Watch for changes in pug data files in JSON/YAML
        gulp.watch([
            dir.pug + '/**/*.{json,yml,yaml}'
            ], ['pug-watch']
        );

        // Watch for changes in destination folder
        gulp.watch([
            dest + '/**/*',
            '!' + dest + '/**/*.css',
            '!' + dest + '/**/*.html'
        ]).on('change', function(){
            // Make sure tasks complete properly before triggering
            clearTimeout(syncTimer);
            syncTimer = setTimeout(browserSync.reload, config.reloadDelay);
        });
    };
}
module.exports = function (gulp, plugins, browserSync, pkg) {

    var config = pkg.config,
            dir    = config.directories,
            dest   = config.baseUrl + dir.destination;
    return function () {

        return browserSync.init({
                ghostMode: false,
                //proxy: "localhost:7000"
                server: { baseDir: dest }
            });
    }
}
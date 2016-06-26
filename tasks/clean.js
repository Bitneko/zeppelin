module.exports = function (gulp, plugins, pkg) {

    var config  = pkg.config,
        dir     = config.directories,
        dest    = config.baseUrl + dir.destination;

    return function () {
        return plugins.del([dest]);
    }
}
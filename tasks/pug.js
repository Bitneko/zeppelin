module.exports = function (gulp, plugins, pkg) {
     var path = require('path'),
            config  = pkg.config,
            dir     = config.directories,
            baseDir = config.baseUrl + dir.pug,
            dest    = config.baseUrl + dir.destination,
            siteData = {},
            dataPath = dir.pug + '/' + dir.data;

    return function() {

        if (plugins.fs.existsSync(dataPath)) {
            siteData = plugins.foldero(dataPath, {
                recurse: true,
                whitelist: '(.*/)*.+\.(json|ya?ml)$',
                loader: function loadAsString(file) {
                  var json = {};
                  try {
                    if (path.extname(file).match(/^.ya?ml$/)) {
                      json = yaml.safeLoad(plugins.fs.readFileSync(file, 'utf8'));
                    }
                    else {
                      json = JSON.parse(plugins.fs.readFileSync(file, 'utf8'));


                    }
                  }
                  catch(e) {
                    console.log('Error Parsing JSON/YAML file: ' + file);
                    console.log('==== Details Below ====');
                    console.log(e);
                  }
                  return json;
                }
            });
        }

        return gulp.src([
                baseDir + '/!(_)**/*.pug',
                baseDir + '/!(_)*.pug'
            ])
            .pipe(plugins.pug({
                locals: {
                    site: {
                      data: siteData
                    }
                },
                basedir: baseDir,
                pretty: true
            }))
            .on('error', function (error) {
                this.emit('end');
            })
            .pipe(gulp.dest(dest));
    }
}
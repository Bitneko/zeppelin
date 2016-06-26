Read Me
====
A Front-end project boilerplate ultilising PUG, SCSS, BrowserSync and Bower with Gulp  
Use the boilerplate to kick start your project and modify the tasks to fit your project requirements.

## Pre-requisites
* Ruby
* Rsync
* NodeJS ([http://www.nodejs.org](http://www.nodejs.org))
* Bower ([http://www.bower.io](http://www.bower.io))
* SASS ([http://sass-lang.com/](http://sass-lang.com/))
* SCSS-LINT ([https://github.com/causes/scss-lint](https://github.com/causes/scss-lint))

#### If you're on Mac...  
If you experience issues with Node permissions, run:  
    ```sudo chown -R `whoami` ~/.npm```  
    ```sudo chown -R `whoami` /usr/local/lib/node_modules```

#### If you're on Ubuntu...  
Follow Mac instructions but also keep these two issues in mind:  
    * http://stackoverflow.com/questions/18130164/nodejs-vs-node-on-ubuntu-12-04

#### If you're on Windows...  
* With Rsync: https://github.com/jedrichards/grunt-rsync/issues/36
* Always run Powershell as Admin
* Install Git and Node to your PATH

## Global NodeJS Module
* Gulp CLI `npm i gulp -g`
* Bower `npm i bower -g`

## Options
Edit Custom Configuration in `package.json` to customise options.

* `host` - Host IP
* `port` - BrowserSync Port
* `baseUrl` - Project root
* `scssLinter` - Location of Scss-Lint Configuration file
* `directories` - Aliases of folders

## Tasks

`gulp bower`
* Download Bower packages
* Copy files defined in packages `bower.json` to destination folder

`gulp default` or `gulp`
* Compile Pugs
* Concatenate JS files
* Copy static assets to destination folder
* Compile SCSS files

`gulp static` (Useful when you are using the pug templates as views for expressJS)
* Concatenate JS files
* Copy static assets to destination folder
* Compile SCSS files

`gulp dist`
* Compile Pugs
* Concatenate JS files
* Copy static assets to destination folder
* Compile SCSS files
* Uglify JS files
* Minify CSS files
* Compress Images

`gulp serve`
* Launch BrowserSync and watch tasks
* Watch tasks trigger BrowserSync reload when files in destination folder changes

`gulp validate`
* Run jshint on JS files
* Run scss lint on SCSS files

`gulp unmq`
* Remove mediaqueries for browsers that don't support mediaqueries

`\(Z)/`

# degeist.github.io
Public website

# web-boilerplate
A Jekyll / SASS bootstrap 4 boilerplate with Gulp &amp; Browser Sync

Based on shakyShane's https://github.com/shakyShane/jekyll-gulp-sass-browser-sync

## System Preparation

To use this starter project, you'll need the following things installed on your machine.

1. [Jekyll](http://jekyllrb.com/) - `$ gem install jekyll`
2. [NodeJS](http://nodejs.org) - use the installer.
3. [GulpJS](https://github.com/gulpjs/gulp) - `$ npm install -g gulp` (mac users may need sudo)


## Local Installation

1. Clone this repo, or download it into a directory of your choice.
2. Inside the directory, run `npm install`.

### Github pages

If using Github pages, you tend to want to use a subfolder. In the gulpfile, there is

```
return cp.spawn( jekyll , ['build','--config','_config_dev.yml'], {stdio: 'inherit'})

```

Which calls the Jekyll config_dev.yml which sets the url as ```localhost```. Change to

```
return cp.spawn( jekyll , ['build'], {stdio: 'inherit'})
```

if not needed.

## Usage

**development mode**

This will give you file watching, browser synchronisation, auto-rebuild, CSS injecting etc etc.

```shell
$ gulp
```

## Icons

### Favicons

Generate favicons from e.g.
http://realfavicongenerator.net/

Place main favicon in root folder and the rest in ```img/favicons/```

### Icons

Go to http://fontastic.me/ and make your custom selection of icons. Download SVG file manually and place in ```img/icons/```

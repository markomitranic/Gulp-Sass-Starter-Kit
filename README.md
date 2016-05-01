# Simple Gulp with SASS template

This is a very simple document startup template. We have gulp with sass set up. We also have autoprefixer and browserSync installed. There are no unnecessary packages and no meddling with your JS or images.

## Usage
The usage is fairly simple. 'npm install' and later 'gulp watch'

## Terms that apply
- All SASS files need to be .scss and located within the scss folder. They will compile as app/css/style.css
- All other files including JS and HTML are free to stay in the app folder.
- Autoprefixer adds browser prefixes after compiling CSS.
- On every save of every file, browser will be refreshed.
- .gitignore is set up for OSX, Windows and Node.
- Gulp Watch watches only for HTML, JS and SCSS files for reload. Manual page reload is allowed.

## Gulpfile.js

Gulpfile has not been modified much. Practically on line 1 you are offered an array of SCSS files to compile and that is all there is to it.
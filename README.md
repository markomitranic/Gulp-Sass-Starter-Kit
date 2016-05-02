# Simple Gulp with SASS template

This is a very simple document startup template. We have gulp with sass set up. We also have autoprefixer and browserSync installed. There are no unnecessary packages and no meddling with your JS or images.

## Usage
The usage is fairly simple. `npm install` and later `gulp watch`.
You'll get the hang of it. ;)

## SASS Compiling Rules
All SASS files need to be .scss and located within the scss folder. SASS will only be compiling two files (print.scss && style.scss) by default. This behavior is hardcoded in our gulpfile.js on line 1.

It is easy to change this (read on), but generally we tend to use `@import` to include more files, as shown in the default style.scss.

All compiled files will compile within the app/css directory, under the same filename. For example the default files will compile as app/css/style.css and app/css/print.css.

## Terms that apply
- All other files including JS and HTML are free to stay in the app folder.
- Generally, you will upload only the contents of the "app" folder to the server.
- Autoprefixer adds browser prefixes only after compiling success of SCSS.
- .gitignore is set up for OSX, Windows and Node.
- On every save of every file, browser will be refreshed.
- There are limits as we watch only for HTML, JS and SCSS files for reload.
- Manual page reload is needed for images directories and other.

## Gulpfile.js
Gulpfile has not been modified much. Practically on line 1 you are offered an array of SCSS files to compile and that is all there is to it.
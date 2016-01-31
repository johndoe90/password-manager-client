var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('ts', shell.task([
    'node node_modules/typescript/lib/tsc.js'
]));

gulp.task('serve', ['ts'], shell.task([
    'node node_modules/live-server/live-server.js'
]));

gulp.task('default', ['serve']);
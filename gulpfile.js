const { gulp, src, dest, parallel, series } = require('gulp')
const watch = require('glob-watcher')

const fs = require('fs')

function syncLang () {
  return src(
    ['../xwebjs-lang/target/js/**'],
    {
      base: '../xwebjs-lang/target/js/'
    }
  ).pipe(
    dest('./')
  )
}

function watchFiles () {
  console.log('Watching the file change:' + examples.toString())
  watch(['../target/js/**'], syncLang)
}

exports.syncLang = syncLang
exports.watch = watchFiles

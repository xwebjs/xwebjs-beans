var basePath = ''

var corePath = {
  target: basePath + '',
  targetLibs: basePath + 'libs',
  targetJs: basePath + 'src/main/js/',
  nodeModulePath: basePath + 'node_modules',
  testSource: basePath + 'src/test'
}

var projectFiles = {
  testSourceBaseFilesPath: [
    corePath.testSource + '/spec/common_helper.js'
  ]
}

if (exports) {
  exports.files = projectFiles
  exports.corePath = corePath
}

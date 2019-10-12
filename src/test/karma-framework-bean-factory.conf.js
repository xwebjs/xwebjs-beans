var _ = require('underscore')
var projectFiles = require('./projectFiles')
var sharedConfig = require('./karma-shared.conf')

module.exports = function (config) {
  sharedConfig(config)
  config.set({
    files: _.union(
      [{
        pattern: projectFiles.corePath.targetLibs + '/*.js',
        included: true
      }],
      projectFiles.corePath.targetJs + '/**/*.js',
      projectFiles.files.testSourceBaseFilesPath,
      [
        projectFiles.corePath.testSource + '/spec/**/*_spec.js',
        {
          pattern: projectFiles.corePath.testSource +
            '/spec/**/*.js',
          included: false,
          nocache: true
        }
      ]
    ),
    proxies: {
      '/bean_app_context/program/': '/base/' + projectFiles.corePath.testSource + '/spec/bean_factory_test/program/'
    }
  })
}

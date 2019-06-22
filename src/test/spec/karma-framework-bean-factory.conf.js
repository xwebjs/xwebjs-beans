var _ = require('underscore')
var projectFiles = require('./projectFiles')
var sharedConfig = require('./karma-shared.conf')

module.exports = function (config) {
  sharedConfig(config)
  config.set({
    files:
      _.union(
        projectFiles.files.libFiles,
        projectFiles.files.coreSourceFiles,
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
      '/bean_app_context/program/': '/base/' + projectFiles.corePath.testSource + '/spec/bean_factory_test/program/',
    }
  })
}

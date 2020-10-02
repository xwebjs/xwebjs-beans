describe('System module loader', function () {
  beforeEach(function () {
    // eslint-disable-next-line no-undef
    jasmine.addMatchers(objectMatcher)
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000
  })
  it('Load vm boot modules from web server', function (done) {
    _x.initVM().then(
      function () {
        var vm = _x.getRootVM()
        vm.setConfiguration({
          vmInfo: {
            loader: {
              bootPath: '/system'
            },
            bootModules: [
              'lang.lib', 'framework.lib'
            ],
            extModules: []
          },
          mainProgramInfo: {
            loader: {
              basePath: '/bean_app_context/program'
            },
            entryClassName: 'MainProgram'
          }
        })
        // @Then
        vm.init().then(
          function (mainAppClass) {
            expect(mainAppClass.$.status === 'done').toBeTruthy()
            expect(mainAppClass.getCollectionSize() === 100).toBeTruthy()
            done()
          },
          function (errors) {
            fail()
          }
        )
      })
  })
})

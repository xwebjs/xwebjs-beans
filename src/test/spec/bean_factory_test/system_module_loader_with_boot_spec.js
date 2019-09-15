describe('System module loader', function () {
  beforeEach(function () {
    // eslint-disable-next-line no-undef
    jasmine.addMatchers(objectMatcher)
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000
  })
  it('Load vm boot modules from web server', function (done) {
    // @Given
    var vm = _x.getRootVM()
    vm.setConfiguration({
      vmInfo: {
        loader: {
        },
        bootModules: [],
        extModules: []
      },
      mainProgramInfo: {
        loader: {
          basePath: '/bean_app_context/program'
        },
        entryClassNames: 'MainProgram'
      }
    })
    // @Then
    vm.init().then(
      function (mainAppClass) {

        done()
      },
      function (errors) {
        fail()
        done()
      }
    )
  })
})

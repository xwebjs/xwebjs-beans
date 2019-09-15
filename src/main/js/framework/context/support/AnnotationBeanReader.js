_x.exportModule(
  {
    imports: []
  },
  function () {

    function registerBean (annotatedClass) {
      doRegisterBean(annotatedClass, null, null, null, null)
    }

    function doRegisterBean (annotatedClass, name, qualifers, supplier, customizers) {

    }

    return _x.createCls(
      {
        staticProps: {},
        construct: function (beanRegistry) {
          this.beanRegistry = beanRegistry
        },
        props: {
          beanRegistry: null
        },
        staticMethods: {},
        methods: {
          register: function (classes) {
            _.forEach(classes,
              function (cls, index) {
                registerBean(cls)
              }
            )
          }
        }
      }
    )
  }
)

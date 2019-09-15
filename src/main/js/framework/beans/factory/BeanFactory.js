_x.exportModule(
  {
    imports: []
  },
  function () {
    var FACTORY_BEAN_PREFIX = '&'
    return _x.createCls(
      {
        staticProps: {},
        props: {
          id: null,
          parentFactory: null
        },
        construct: [
          function (parentFactory) {
            this.parentFactory = parentFactory
          }
        ],
        staticMethods: {},
        methods: {
          initializeId: function () {
            this.id = FACTORY_BEAN_PREFIX + _x.util.getRandomString(10)
          },
          destroy: function () {

          }
        }
      }
    )
  }
)

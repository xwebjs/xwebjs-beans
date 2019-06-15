_x.exportModule(
  {
    imports: [
      'util.Map',
      'ClassLoader'
    ]
  },
  function (Map, ClassLoader) {
    return _x.createCls(
      {
        staticProps: {},
        props: {
          parentBeanFactory: null,
          cachedBeans: {}
        },
        staticMethods: {},
        methods: {}
      }
    )
  }
)

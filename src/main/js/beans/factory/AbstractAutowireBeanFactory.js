_x.exportModule(
  {
    imports: [
      'beans.factory.AbstractBeanFactory'
    ]
  },
  function () {
    return _x.createCls(
      {
        staticProps: {},
        props: {
          cachedBeans : {}
        },
        staticMethods: {},
        methods: {}
      }
    )
  }
)

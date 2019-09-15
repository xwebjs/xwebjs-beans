_x.exportModule(
  {
    imports: [
      'framework.context.BeanContext',
      'framework.context.support.AnnotationBeanReader'
    ]
  },
  function (BeanContext, AnnotationBeanReader) {
    /**
     * @class AnnotatedConfigApplicationContext
     */
    return _x.createCls(
      {
        staticProps: {},
        construct: function (config) {
          this.scannedBeanPackages = config.scannedBeanPackages
        },
        props: {
          scannedBeanPackages: [],
          annotationBeanReader: null
        },
        staticMethods: {},
        methods: {
          /**
           * @override
           * @param beanFactory
           */
          loadBeanDefinitions: function (beanFactory) {
            this.annotatedBeanReader = new AnnotationBeanReader(beanFactory)
          }
        }
      }, BeanContext
    )
  }
)

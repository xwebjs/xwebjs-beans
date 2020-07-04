_x.exportModule(
  {
    imports: [
      'framework.beans.factory.BeanFactory'
    ]
  },
  function (BeanFactory) {
    /**
     * @class BeanFactory
     */
    return _x.createCls(
      {
        staticProps: {},
        props: {
          id: null,
          isActive: true,
          beanFactory: null,
          parentContext: null,
          environment: null,
          lifeCycleProcessor: null,
          applicationListeners: []
        },
        staticMethods: {},
        methods: {
          getBeanFactory: function () {
            return this.beanFactory
          },
          getParent: function () {
            return this.parentContext
          },
          getEnvironment: function () {
            if (_.isNull(this.environment)) {
              this.createEnvironment()
            }
          },
          getLifeCycleProcessor: function () {
            //todo
          },
          getApplicationListeners: function () {
            return this.applicationListeners
          },
          publishEvent: function (applicationEvent) {

          },
          createEnvironment: function () {
          },
          refresh: function () {
            this.prepareRefresh().then(
              function () {
                var beanFactory = this.obtainFreshBeanFactory()
                return this.prepareBeanFactory(beanFactory)
              }
            ).then(
              function () {
                return this.postActionsOfBeanFactory(this.beanFactory)
              }
            ).then(
              function () {
                return this.invokeBeanFactoryPostProcessor()
              }
            ).then(
              function () {
                return this.initMessageSource()
              }
            ).then(
              function () {
                return this.onFresh()
              }
            ).then(
              function () {
                return this.registerListeners()
              }
            ).catch(
              function (errors) {
                _x.logger.error('Failed to refresh the application context, caused by:' + errors)
              }
            )
          },
          obtainFreshBeanFactory: function () {
            var beanFactory
            if (!_.isNull(this.beanFactory)) {
              this.getBeanFactory().destroy()
              this.beanFactory = null
            }
            beanFactory = new BeanFactory(this.getParent())
            beanFactory.initializeId()
            this.loadBeanDefinitions()
            this.beanFactory = beanFactory
          },
          prepareRefresh: function () {

          },
          prepareBeanFactory: function () {

          },
          postActionsOfBeanFactory: function (beanFactory) {

          },
          invokeBeanFactoryPostProcessor: function (beanFactory) {

          },
          initMessageSource: function () {

          },
          onFresh: function () {

          },
          cancelFresh: function (cause) {
            _.logger.info('Application refreshment is cancelled, caused by:' + cause)
            this.isActive = false
          },
          registerListeners: function () {

          },
          finishRefresh: function () {

          },
          //protected methods
          /**
           * @param beanFactory {BeanFactory}
           */
          loadBeanDefinitions:  function (beanFactory) {

          }
        }
      }
    )
  }
)

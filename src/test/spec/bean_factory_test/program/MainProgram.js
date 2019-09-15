_x.exportModule(
  {
    imports: [
      'framework.context.AnnotatedConfigApplicationContext',
      'game.Game'
    ]
  },
  function (AnnotatedConfigApplicationContext, Game) {
    return _x.createCls(
      {
        staticProps: {
          appContext: null
        },
        staticMethods: {
          main: function () {
            this.$.appContext = new AnnotatedConfigApplicationContext({
              scan: [Game]
            })
          }
        }
      }
    )
  }
)

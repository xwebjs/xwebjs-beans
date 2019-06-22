_x.exportModule(
  {
    imports: [
      'framework.context.AppContext',
      'game.Game'
    ]
  },
  function (AppContext, Game) {
    return _x.createCls(
      {
        staticMethods: {
          main: function () {
            var appContext = new AppContext({
              scan: [Game]
            })
          }
        }
      }
    )
  }
)

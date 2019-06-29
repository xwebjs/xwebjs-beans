_x.exportModule(
  {
    imports: [
      'framework.annotation.Injected',
      'game.Ball'
    ]
  },
  function (Ball, Injected) {
    return _x.createCls(
      {
        props: {
          ball: {
            _xConfig: true,
            annotations: [Injected],
            type: Ball
          }
        }
      }
    )
  }
)

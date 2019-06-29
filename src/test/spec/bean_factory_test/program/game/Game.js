_x.exportModule(
  {
    imports: [
      'framework.annotation.Injected',
      'game.Ball',
      'game.Player'
    ]
  },
  function (Ball, Injected, Player) {
    return _x.createCls(
      {
        props: {
          ball: {
            _xConfig: true,
            annotations: [Injected],
            type: Ball
          },
          playerA: {
            _xConfig: true,
            annotations: [Injected],
            type: Player
          },
          playerB: {
            _xConfig: true,
            annotations: [Injected],
            type: Player
          }
        }
      }
    )
  }
)

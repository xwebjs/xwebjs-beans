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
            _xConfig: {
              annotations: [Injected],
              type: Ball
            }
          },
          playerA: {
            _xConfig: {
              annotations: [Injected],
              type: Player
            }
          },
          playerB: {
            _xConfig: {
              annotations: [Injected],
              type: Player
            }
          }
        }
      }
    )
  }
)

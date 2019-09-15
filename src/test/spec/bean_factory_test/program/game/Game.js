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
            annotations: [Injected.valueOf(Ball.class)]
          },
          playerA: {
            _xConfig: true,
            annotations: [Injected.valueOf(Player.class)]
          },
          playerB: {
            _xConfig: true,
            annotations: [Injected.valueOf(Player.class)],
          }
        }
      }
    )
  }
)

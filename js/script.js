window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game;

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    console.log("start game");
    game = new Game();

    game.start();
  }

  function keydownHandler(e) {
    if (e.key === "ArrowUp") {
      return (game.player.directionY = -1);
    } else if (e.key === "ArrowLeft") {
      return (game.player.directionX = -1);
    } else if (e.key === "ArrowDown") {
      return (game.player.directionY = 1);
    } else if (e.key === "ArrowRight") {
      return (game.player.directionX = 1);
    }
    e.preventdefault();

    // game.player.move();
  }

  window.addEventListener("keydown", keydownHandler);
};

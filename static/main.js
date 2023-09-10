const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

const GRID_SIZE = 20;
const SNAKE_SIZE = 1;
const FOOD_SIZE = 1;

const game = {
  snake: [{ x: 10, y: 10 }],
  food: { x: 15, y: 15 },
  direction: "right",
  gameOver: false,
  score: 0,
};

function drawSnake() {
  ctx.fillStyle = "#00ff00"; // Snake color (green)
  game.snake.forEach((segment) => {
    ctx.fillRect(
      segment.x * GRID_SIZE,
      segment.y * GRID_SIZE,
      GRID_SIZE - 2,
      GRID_SIZE - 2
    );
  });
}

function drawFood() {
  ctx.fillStyle = "#ff0000"; // Food color (red)
  ctx.fillRect(
    game.food.x * GRID_SIZE,
    game.food.y * GRID_SIZE,
    GRID_SIZE - 2,
    GRID_SIZE - 2
  );
}

function drawScore() {
  ctx.fillStyle = "white"; // Score text color (white)
  ctx.font = "20px Arial";
  ctx.fillText(`Score: ${game.score}`, 10, 30);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Set the background color for the game area (canvas) as specified in the CSS
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (game.gameOver) {
    ctx.fillStyle = "white"; // Game Over message and score text color (white)
    ctx.font = "30px Arial";
    ctx.fillText("Game Over", 100, 150);
    ctx.fillText(`Score: ${game.score}`, 140, 200);
    return;
  }

  drawSnake();
  drawFood();
  drawScore();
}

function update() {
  if (game.gameOver) return;

  const head = { ...game.snake[0] };

  switch (game.direction) {
    case "up":
      head.y--;
      break;
    case "down":
      head.y++;
      break;
    case "left":
      head.x--;
      break;
    case "right":
      head.x++;
      break;
  }

  if (
    head.x < 0 ||
    head.x >= GRID_SIZE ||
    head.y < 0 ||
    head.y >= GRID_SIZE ||
    game.snake.some((segment) => segment.x === head.x && segment.y === head.y)
  ) {
    game.gameOver = true;
    return;
  }

  game.snake.unshift(head);

  if (head.x === game.food.x && head.y === game.food.y) {
    game.score += 10;
    game.food = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
  } else {
    game.snake.pop();
  }
}

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      if (game.direction !== "down") game.direction = "up";
      break;
    case "ArrowDown":
      if (game.direction !== "up") game.direction = "down";
      break;
    case "ArrowLeft":
      if (game.direction !== "right") game.direction = "left";
      break;
    case "ArrowRight":
      if (game.direction !== "left") game.direction = "right";
      break;
  }
});

setInterval(() => {
  update();
  draw();
}, 200);

import random
from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Define the grid size
GRID_SIZE = 20

# Initialize the Snake game
class SnakeGame:
    def __init__(self):
        self.snake = [(GRID_SIZE // 2, GRID_SIZE // 2)]
        self.food = self.generate_food()
        self.direction = (0, 1)
        self.game_over = False

    def generate_food(self):
        while True:
            food = (random.randint(0, GRID_SIZE - 1), random.randint(0, GRID_SIZE - 1))
            if food not in self.snake:
                return food

    def move(self):
        if self.game_over:
            return

        head = self.snake[0]
        new_head = (head[0] + self.direction[0], head[1] + self.direction[1])

        if (
            new_head in self.snake
            or new_head[0] < 0
            or new_head[0] >= GRID_SIZE
            or new_head[1] < 0
            or new_head[1] >= GRID_SIZE
        ):
            self.game_over = True
            return

        self.snake.insert(0, new_head)

        if self.snake[0] == self.food:
            self.food = self.generate_food()
        else:
            self.snake.pop()

# Create a new Snake game instance
game = SnakeGame()

@app.route("/")
def index():
    return render_template("index.html", GRID_SIZE=GRID_SIZE)

@app.route("/move/<direction>")
def move(direction):
    if direction == "up":
        game.direction = (-1, 0)
    elif direction == "down":
        game.direction = (1, 0)
    elif direction == "left":
        game.direction = (0, -1)
    elif direction == "right":
        game.direction = (0, 1)
    game.move()
    return redirect(url_for("index"))

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

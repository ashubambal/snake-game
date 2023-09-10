# Snake Game

Welcome to the Snake Game, a simple web-based Snake game implemented in Python using Flask and Docker.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Docker Support](#docker-support)
- [License](#license)

## Description

This project is a classic Snake game where you control a snake that moves around the screen and tries to eat food items to grow longer. The game is implemented as a web application using Flask, a micro web framework for Python. It's designed to run in a Docker container, making it easy to deploy and play on any system that supports Docker.

## Features

- Classic Snake gameplay.
- Use arrow keys to control the snake.
- Score tracking.
- Start and reset buttons for convenience.
- Docker support for easy deployment.

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/ashubambal/snake-game.git
Navigate to the project directory:

	cd snake-game
Build the Docker image:
	
 	docker build -t snake-game .
	
Run the Docker container:

	docker run -p 5000:5000 snake-game
Open a web browser and access the Snake Game at:
	
  	http://localhost:5000.

Use arrow keys to control the snake. Click the "Start" button to begin the game and "Reset" to start a new game.

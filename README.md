# Snake-Game

Welcome to the Snake Game, a simple web-based Snake game implemented in Python using Flask and Docker.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Docker Support](#docker-support)
- [Output](#Output)

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
2. Navigate to the project directory:
	
		cd snake-game
3. Build the Docker image:
	
		docker build -t snake-game .
	
4. Run the Docker container:

		docker run -p 5000:5000 snake-game
5. Open a web browser and access the Snake Game at:
	
  		http://localhost:5000

## Jenkinsfile for Continuous Integration (CI)

This project includes a Jenkinsfile that allows you to set up Continuous Integration (CI) for automated building and testing of your Snake Game using Jenkins. Follow these steps to configure CI with Jenkins:

1. **Install and Configure Jenkins:** If you haven't already, install Jenkins on your server or machine, and set up the necessary plugins, including the GitHub plugin.

2. **Create a Jenkins Pipeline Job:**

    - Open Jenkins.
    - Click "New Item" to create a new job.
    - Enter a name for your job (e.g., "Snake Game CI") and select "Pipeline" as the job type.
    - Click "OK" to create the job.

3. **Configure the Jenkins Pipeline:**

    - In the pipeline configuration:
        - Under the "Pipeline" section, choose "Pipeline script from SCM."
        - Select "Git" as the SCM.
        - Enter the URL of your GitHub repository (e.g., `https://github.com/your-username/snake-game.git`).
        - Specify the branch you want to build (e.g., "main").
        - In the "Script Path" field, enter the path to your Jenkinsfile (e.g., "Jenkinsfile").
    - Save the pipeline configuration.

4. **GitHub Webhook Integration:**

    - In your GitHub repository, go to "Settings" > "Webhooks."
    - Add a webhook with the payload URL pointing to your Jenkins server's GitHub webhook endpoint (e.g., `http://your-jenkins-server/github-webhook/`).
    - Set the content type to `application/json`.
    - Choose the events that should trigger the webhook (e.g., "Just the push event").
    - Save the webhook configuration.

5. **Testing the CI/CD Pipeline:**

    - Make changes to your Snake Game code and push them to your GitHub repository.
    - Go to your Jenkins dashboard, and you should see your CI job automatically triggered by the GitHub webhook.
    - Jenkins will build and test your Snake Game based on the instructions in the Jenkinsfile.

That's it! You've successfully set up CI for your Snake Game project using Jenkins and a Jenkinsfile.


## Output
![snake-game](https://github.com/ashubambal/snake-game/assets/92073828/a93f0b10-280e-4733-a3dd-97128b843445)


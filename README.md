# Snake-Game

Welcome to the Snake Game, a simple web-based Snake game implemented in Python using Flask and Docker.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Docker and Docker Compose Setup](#Docker-and-Docker-Compose-Setup)
- [Usage](#usage)
- [Kubernetes Deployment](#Kubernetes-Deployment)

## Description

This project is a classic Snake game where you control a snake that moves around the screen and tries to eat food items to grow longer. The game is implemented as a web application using Flask, a microweb framework for Python. It's designed to run in a Docker container, making it easy to deploy and play on any system that supports Docker.

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

## Docker and Docker Compose Setup

This project uses Docker and Docker Compose for containerization and easy deployment. Follow these steps to set up Docker and Docker Compose for running the Snake Game in a containerized environment:

1. **Install Docker:**

   If you haven't already, install Docker on your system by following the instructions for your specific platform: [Docker Installation Guide](https://docs.docker.com/get-docker/)

2. **Install Docker Compose:**

   Install Docker Compose, which is used to define and manage multi-container Docker applications. Follow the installation instructions here: [Docker Compose Installation Guide](https://docs.docker.com/compose/install/)

3. **Clone the Repository:**

   Clone the Snake Game repository to your local machine if you haven't already:

   ```bash
   git clone https://github.com/your-username/snake-game.git
   cd snake-game

## Kubernetes Deployment

This project includes Kubernetes deployment and service configuration files (`deployment.yml` and `service.yml`) to help you deploy the Snake Game on a Kubernetes cluster. Follow these steps to set up the game on Kubernetes:

1. **Kubernetes Cluster Setup:**

   If you don't have a Kubernetes cluster set up, you can create one using a tool like [Minikube](https://minikube.sigs.k8s.io/docs/start/) for local development or deploy on a cloud provider like [Google Kubernetes Engine (GKE)](https://cloud.google.com/kubernetes-engine) or [Amazon EKS](https://aws.amazon.com/eks/).

2. **Clone the Repository:**

   Clone the Snake Game repository to your local machine if you haven't already:

   ```bash
   git clone https://github.com/your-username/snake-game.git
   cd snake-game

## Apply Kubernetes Configuration

1. Use the following commands to apply the Kubernetes deployment and service configurations:

		kubectl apply -f deployment.yml
		kubectl apply -f service.yml

   This will create a deployment and a service for the Snake Game application on your Kubernetes cluster.


2. Access the Snake Game:

   To access the Snake Game, you need to find the external IP or URL of the service. Use the following command to get the external IP:

		kubectl get svc snake-game-service

   Look for the "EXTERNAL-IP" column to find the IP address or URL. You can access the Snake Game in your web browser at that IP or URL.

3. Clean Up:

   To remove the Snake Game deployment and service from your Kubernetes cluster when you're done, you can use:

		kubectl delete -f deployment.yml
		kubectl delete -f service.yml

   That's it! You can now deploy and run the Snake Game on your Kubernetes cluster using the provided deployment and service configuration files.

## Output
![snake-game](https://github.com/ashubambal/snake-game/assets/92073828/eba2af95-6e0d-4969-bd90-e5110b270627)



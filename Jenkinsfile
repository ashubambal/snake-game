pipeline {
    agent any

    stages {
        stage("Clone Code") {
            steps {
                echo "Cloning The Code"
                git url: "https://github.com/ashubambal/snake-game.git", branch: "main" 
            }
        }
        stage("Code Build & Test") {
            steps {
                echo "Building and testing code"
                sh "docker build -t snake-game ."
            }
        }
        stage("Push Docker image on DockerImage") {
            steps {
                echo "Pushing docker image on DockerHub"
                withCredentials([usernamePassword(credentialsId:"DockerCredentials",passwordVariable:"dockerHubPass",usernameVariable:"dockerHubUser")]) {
                    sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPass}"
                    sh "docker tag snake-game ${env.dockerHubUser}/snake-game:latest"
                    sh "docker push ${env.dockerHubUser}/snake-game:latest"
                }
            }
        } // Missing closing curly brace was added here
        stage("Pulling images") {
            steps {
                echo "pulling docker image"
                sh "docker pull softconsist/snake-game:latest"
                sh "docker-compose down && docker-compose up -d"
            }
        }
    }
}


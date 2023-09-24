pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Check out your code from your repository
                checkout scm
            }
        }

        stage('Build') {
            steps {
                // Install Node.js and npm (if not already installed)
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                // Run your tests
                bat 'npm run test'
            }
        }
    }

    post {
        success {
            // This block is executed if the pipeline succeeds
            echo 'Build and tests passed!'
        }
        failure {
            // This block is executed if the pipeline fails
            echo 'Build or tests failed!'
        }
        always {
            // Publish Allure report
            allure([
                includeProperties: false,
                jdk: '',
                results: [[path: 'allure-results']]
            ])
        }
    }
}
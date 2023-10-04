pipeline {
    agent any

     parameters {
            choice(
                choices: ['regression', 'suite1', 'suite2'],
                description: 'Select the test suite to run',
                name: 'TEST_SUITE'
            )
        }

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
                script {
                    def selectedSuite = params.TEST_SUITE

                    if (selectedSuite == 'regression') {
                        // Run regression
                        bat 'npm run test'
                    }
                    if (selectedSuite == 'suite1') {
                        // Run suite1
                        bat 'npm run test:suite1'
                    } else if (selectedSuite == 'suite2') {
                        // Run suite2
                        bat 'npm run test:suite2'
                    }
                }
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
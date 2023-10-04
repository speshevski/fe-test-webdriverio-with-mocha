pipeline {
    agent any

    parameters {
        choice(
            choices: ['regression', 'suite1', 'suite2'], // Add more suites as needed
            description: 'Select the test suite to run',
            name: 'TEST_SUITE',
        )
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                script {
                    def selectedSuite = params.TEST_SUITE

                    if (selectedSuite == 'regression') {
                        // Run the default 'npm run test' script (regression)
                        bat 'npm run test'
                    } else if (selectedSuite == 'suite1') {
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
            echo 'Build and tests passed!'
        }
        failure {
            echo 'Build or tests failed!'
        }
        always {
            script {
                def currentBuildNumber = currentBuild.number
                def allureResultsDir = "allure-results-${currentBuildNumber}"

                // Clean up the previous Allure results (if any) to ensure only current results are saved
                deleteDir(path: allureResultsDir)

                // Generate Allure report and save it to the unique results directory
                bat "allure generate allure-results -o ${allureResultsDir}"
                allure([
                    includeProperties: false,
                    jdk: '',
                    results: [[path: allureResultsDir]]
                ])
            }
        }
    }
}
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building application..'
                nodejs('node-20') {
                    sh 'yarn install'
            }
        }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                withGradle() {
                    sh './gradle -v'
            }
        }
    }
}
}

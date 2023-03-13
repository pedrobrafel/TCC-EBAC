pipeline {
    agent any

    stages {
        stage('Clonar o repositorio') {
            steps {
                git url:'https://github.com/pedrobrafel/TCC-EBAC.git', branch: 'main' 
            }
        }
        stage('Instalar dependências') {
            steps {
                bat 'npm install'
            }
        }
        stage('Executar testes') {
            steps {
                bat 'npx cypress run'
            }
        }
    }
}

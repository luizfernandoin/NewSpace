<h1 align="center">New Space</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.1.1-blue.svg?cacheSeconds=2592000" />
  <a href="LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/npm/l/react" />
  </a>
</p>

### 🏠 [Homepage](https://github.com/luizfernandoin/NewSpace)

![plot](https://github.com/luizfernandoin/NewSpace/tree/main/app/static/src/img/site.png?raw=true)

## Table of Contents 
- [Description](#description)
- [Features](#features)
- [Installation and Configuration](#installation-and-configuration)
- [Copyright and License](#copyright-and-license)

### Description
NewSpace is a web service developed during the Systems Analysis and Development course as a **obrigatório** requirement of the Markup Languages course at the Federal Institute of Education, Science and Technology of Paraíba.
The same can be considered a scientific journal of an astronomical nature, in which it is composed of some tools that allow greater interactivity with the user, preserving the educational scope. Furthermore, the user is able to view relevant astronomical information, such as news, events, images and videos.

### Features

- 🚀 Space exploration
- 📱&nbsp; Responsive for different types of devices.
- ⌨&nbsp; Intuitive navigation.
- 🖼️&nbsp; Attractive design.
- 📚&nbsp; Educational focus astronomical information.
- ⚡&nbsp; Fast loading speed. -carregamento.
- 👩‍💻&nbsp; Information provided from APIs.
- 🎥&nbsp; Integration with social media.
- 🔒&nbsp; Security.
- 💬&nbsp; Space community.
- 📝&nbsp; News, media and updates.


### Installation
Para utilizar o NewSpace localmente, basta clonar esse repositorio utilizando
```jsx
// Precisa ter o git instalado!
git clone https://github.com/luizfernandoin/NewSpace.git
```
ou baixando um arquivo ZIP do código.

### Configuration
Here's a summary of how to configure the app:
* **1º Passo** : O repositório, se baixado como um arquivo .zip, precisará ser extraído para o local de sua preferência e aberto;
* **2º Passo** : Vá para o diretório raiz do projeto e crie um ambiente virtual;
```jsx
// Criar venv
python -m venv nome-do-ambiente

// Ativar
cd .\venv\Scripts\

.\activate
```

* **3º Passo** : Faça o download de todas as dependencias e bibliotecas obrigatorias para o funcionamento do projeto. No terminal, execute os comandos 
```jsx
// Todas as dependencias estão no requirements.txt
pip install -r requirements.txt
```
* **4º Passo** : Modifique as configurações do arquivo **`.env`** com suas informações de banco de dados.
```jsx
// .env
SECRET_KEY= 'sua-chave-de-segurança'
USUARIO= 'usuario-do-banco'
SENHA= 'senha-do-banco'
DATABASE= 'nome-do-banco-de-dados'
```
* **5º Passo** : Para realizar as configurações de banco de dados, basta codar os seguintes comandos:
```jsx
// Criação de uma migração inicial
flask db init

// Geração de migrações subsequentes
flask db migrate -m "Descrição da migração"

// Aplicação das migrações
flask db upgrade
```
* **6º Passo** : Agora você pode iniciar o aplicativo localmente executando o comando
```jsx
python run.py
``` 
* Abra o navegador de sua preferência e visualize o aplicativo abrindo o link **http://127.0.0.1:5000/**.

# Technologies used
* Python 3+
* Pip
* PostgresSQL  
* Venv
* Flask
* APIs (LL2 e SNAPI)
* HTML
* CSS
* JavaScript

<img src="https://github.com/luizfernandoin/NewSpace/tree/main/app/static/src/img/site1.png?raw=true"/>

## Desenvolvedores
👤 **Luiz Fernando**

## Mostre seu apoio
Dê um ⭐️ se esse projeto te ajudou!

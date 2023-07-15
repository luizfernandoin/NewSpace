<h1 align="center">New Space</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.1.1-blue.svg?cacheSeconds=2592000" />
  <a href="LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/npm/l/react" />
  </a>
</p>

# 🏠 [Homepage](https://github.com/luizfernandoin/NewSpace)

![plot](https://github.com/luizfernandoin/NewSpace/blob/main/app/static/src/img/site.png?raw=true)


## Table of Contents 
- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration) Technologies used
- [Technologies used](#technologies-used)
- [Contributors](#contributors)
- [Show your support](#Show-your-support)

## Description
NewSpace is a web service developed during the Systems Analysis and Development course as a **required** requirement of the Markup Languages course at the Federal Institute of Education, Science and Technology of Paraíba.
The same can be considered a scientific journal of an astronomical nature, in which it is composed of some tools that allow greater interactivity with the user, preserving the educational scope. Furthermore, the user is able to view relevant astronomical information, such as news, events, images and videos.

## Features

- 🚀 Space exploration
- 📱&nbsp; Responsive for different types of devices.
- ⌨&nbsp; Intuitive navigation.
- 🖼️&nbsp; Attractive design.
- 📚&nbsp; Educational focus astronomical information.
- ⚡&nbsp; Fast loading speed.
- 👩‍💻&nbsp; Information provided from APIs.
- 🎥&nbsp; Integration with social media.
- 🔒&nbsp; Security.
- 💬&nbsp; Space community.
- 📝&nbsp; News, media and updates.


## Installation
To use NewSpace locally, just clone this repository using
```jsx
// Need to have git installed!
git clone https://github.com/luizfernandoin/NewSpace.git
```
or by downloading a ZIP file of the code.

## Configuration
Here's a summary of how to configure the app:
* **Step 1** : The repository, if downloaded as a .zip file, will need to be extracted to your preferred location and opened;
* **2nd Step** : Go to the root directory of the project and create a virtual environment;
``` jsx
// create venv
python -m venv environment-name

// activate
cd .\venv\Scripts\

.\activate
```

* **3rd Step** : Download all dependencies and libraries required for the project to work. In the terminal, run the commands
``` jsx
// All dependencies are in requirements.txt
pip install -r requirements.txt
```
* **Step 4** : Modify the file settings **`.env`** with your database information.
``` jsx
// .env
SECRET_KEY= 'your-security-key'
USER= 'bank-user'
PASSWORD= 'bank-password'
DATABASE= 'database-name'
```
* **5th Step** : To perform the database settings, just code the following commands:
``` jsx
// Creating an initial migration
flask db init

// Generation of subsequent migrations
flask db migrate -m "Migration description"

// Application of migrations
flask db upgrade
```
* **Step 6** : Now you can launch the application locally by running the command
``` jsx
python run.py
```
* Open the browser of your choice and view the application by opening the link **http://127.0.0.1:5000/**.

## Technologies used
* Python 3+
* pip
* PostgresSQL
* Venv
* Flask
* APIs (LL2 and SNAPI)
* HTML
* css
* JavaScript

## Contributors

<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="25%"><a href="https://github.com/luizfernandoin"><img src="https://avatars.githubusercontent.com/u/106038535?v=4?s=60" width="60px;" alt="Luiz"/><br /><sub><b>Luiz Fernando</b></sub></a><br /><a href="https://github.com/luizfernandoin/NewSpace/commits?author=luizfernandoin" title="Documentation">💻</a></td>
    </tr>
  </tbody>
</table>

## Show your support
Give a ⭐️ if this project helped you!
<img src="https://github.com/luizfernandoin/NewSpace/blob/main/app/static/src/img/site1.png?raw=true"/>
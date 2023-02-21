---
id: GitHub-Repositories

---

# GitHub-Repositories

## Introduction: 
How many repositories are there

There are a total of 6 Repositories:
- [tilli-backend-server](https://github.com/tillioss/tilli-backend-server)
- [tilli-ide](https://github.com/tillioss/tilli-ide)
- [tilli-web-app](https://github.com/tillioss/tilli-web-app)
- [Godot-Strategies-V1](https://github.com/tillioss/Godot-Strategies-V1)
- [tilli-machine-learning](https://github.com/tillioss/tilli-machine-learning)
- [tilli-docs](https://github.com/tillioss/tilli-docs)

## Backend Server (Backend Developers)
This page is still work in progress and will be further extended & improved.

### Intro  
(What it is, How it works, What it has)

Tilli is a web-based application with scala as backend and uses truffle as a tool to compile. It uses MongoDB as a database.

### Setups, Install & Run

#### Prerequisite

To run Tilli in your system please make sure you have the following app and libraries installed.

Node-js --version == 10.18.1
Yarn --version == 1.21.1

_____________________

#### Installing Tilli Server

To set up this software on your machine locally you need to clone this repository: 

https://github.com/tillioss/tilli-backend-server 

$ cd tilli-backend-server

Please Note: Install Redis in Your System.

 How to Setup Redis

To stop your redis /etc/init.d/redis-server stop 

If you need backup your existing data cd /var/lib/redis/cp dump.rdb dump1.rdb

Replace redis data

cp tilli-backend-server/data/dump.rdb /var/lib/redis/

Restart your redis /etc/init.d/redis-server restart

_____________________

#### File Setup

Move and extract data files from tilli-backend-server/data/files.zip to [your_data_path]

Ex: cp tilli-backend-server/data/files.zip [your_data_path]
_____________________

#### To run locally - using SBT

sbt "runMain com.teqbahn.bootstrap.StarterMain local 2553 8093 [ServerIP] [RedisIP]:[RedisPort] [MailId] [MailPassword] [your_data_path]"

- local - server running environment

- 2553 - Akka Port

- 8093 - Attp Port

- httpHostName: 192.0.0.1

- [ServerIP] - Replace your system IP Address Ex: 192.0.0.1

- [RedisIP] - Replace your Redis IP Address Ex: 127.0.0.1

- [RedisPort] - Replace your Redis Port Ex: 6379

If you required send mail, Please configure mail setup otherWise use the dummy values.

- [MailId] - Replace your mail id Ex: xxxx@xyz.com 

- [MailPassword] - Replace your password Ex: password123

- [your_data_path] - Replace your system filepath Ex: /html/tilli

Ex: sbt "runMain com.teqbahn.bootstrap.StarterMain local 2553 8093 192.1.0.1 127.0.0.1:6379 xxxx@xyz.com password123 /html/tilli"


 How to Give Feedback or Report Bugs

If you encounter any issue or you are not able to figure out the same in the Backend Server, kindly report the issue on our official GitHub Forms: 

- Bug Report Form: [HERE](https://github.com/tillioss/tilli-backend-server/issues/new?assignees=Tilliforkids%2Cmynap&labels=bug%2Cdevelopment&template=bug_report_form.yml&title=Found+a+%5Bbug%5D)
- Feedback/Doubts Form: [HERE](https://github.com/tillioss/tilli-backend-server/issues/new?assignees=Tilliforkids%2Cmynap&labels=feedback%2Fdoubt%2Cdocumentation&template=feedback_or_doubt_form.yml&title=Have+a+%5Bfeedback%5D%2C+%5Bdoubt%5D)

You can also search for past issues or requests to check if any other user has already encountered your issue or suggested the same feature here: 

- For open issues (yet to be solved): [HERE](https://github.com/tillioss/tilli-backend-server/issues?q=is%3Aopen+is%3Aissue)
- For closed issues (solved): [HERE](https://github.com/tillioss/tilli-backend-server/issues?q=is%3Aissue+is%3Aclosed)

If you wish to open an issue that does not fall in any of the above categories, kindly open a blank issue: [HERE](https://github.com/tillioss/tilli-backend-server/issues/new)

## IDE + Web App: (Backend + Frontend Developers)

### Intro 
(What it is, How it works, What it has)

The IDE is a prototyping platform that allows one to create, customize and upload one’s own content and curriculum for children to interact with via a web-app.

Features Available: (Link to Module Creators)

### Install & Run

#### Installing Tilli Web App

1. Configuration:

Need to change IP address and Port in config/Myconstant.js:

Ex apiURL: http://192.yyy.1.xxx:8093/tilli-api/

2. How to run? Yarn/npm/

- Use below CMD to install modules :

npm install

- Enter below CMD to start :

npm start

Running Url: http://localhost:3023/tilli-web/ 

#### Installing Tilli IDE

1. Configuration:

Need to change IP address and Port in config/Myconstant.js:

Ex apiURL: http://192.yyy.1.xxx:8093/tilli-api/

2. How to run? Yarn/npm/..

- Use below CMD to install modules :

npm install

- Enter below CMD to start :

npm start

Running Url : 'http://localhost:3022/tilli/'

UserName :tilliadmin

Password :tilliadmin


### How to Give Feedback or Report Bugs or Request New Features

If you encounter any issue or you are not able to figure out the same in the IDE, kindly report the issue on our official GitHub Forms: 

- Bug Report Form: [HERE](https://github.com/tillioss/tilli-ide/issues/new?assignees=Tilliforkids%2Cmynap&labels=bug%2Cdevelopment&template=bug_report_form.yml&title=Found+a+%5Bbug%5D)
- Feedback/Doubts Form: [HERE](https://github.com/tillioss/tilli-ide/issues/new?assignees=Tilliforkids%2Cmynap&labels=feedback%2Fdoubt%2Cdocumentation&template=feedback_or_doubt_form.yml&title=Have+a+%5Bfeedback%5D%2C+%5Bdoubt%5D)

If you wish to suggest new features that could be beneficial for you and the community in the IDE kindly fill the following form:

- Feature Request Form: [HERE](https://github.com/tillioss/tilli-ide/issues/new?assignees=Tilliforkids%2Cmynap&labels=enhancement%2Cquestion&template=feature_request.yml&title=Request+for+%5Bfeature%5D)

You can also search for past issues or requests to check if any other user has already encountered your issue or suggested the same feature here: 

- For open issues (yet to be solved): [HERE](https://github.com/tillioss/tilli-ide/issues)
- For closed issues (solved): [HERE](https://github.com/tillioss/tilli-ide/issues?q=is%3Aissue+is%3Aclosed)

If you wish to open an issue that does not fall in any of the above categories, kindly open a blank issue: [HERE](https://github.com/tillioss/tilli-ide/issues/new)

___________________________________________________________

If you encounter any issue or you are not able to figure out the same in the Web-App, kindly report the issue on our official GitHub Forms: 

- Bug Report Form: [HERE](https://github.com/tillioss/tilli-web-app/issues/new?assignees=Tilliforkids%2Cmynap&labels=bug%2Cdevelopment%2Cart+%26+design&template=bug_report_form.yml&title=Found+a+%5Bbug%5D)
- Feedback/Doubts Form: [HERE](https://github.com/tillioss/tilli-web-app/issues/new?assignees=Tilliforkids%2Cmynap&labels=feedback%2Fdoubt%2Cdocumentation&template=feedback_or_doubt_form.yml&title=Have+a+%5Bfeedback%5D%2C+%5Bdoubt%5D)

You can also search for past issues or requests to check if any other user has already encountered your issue or suggested the same feature here: 

- For open issues (yet to be solved): [HERE](https://github.com/tillioss/tilli-web-app/issues?q=is%3Aopen+is%3Aissue)
- For closed issues (solved): [HERE](https://github.com/tillioss/tilli-web-app/issues?q=is%3Aissue+is%3Aclosed)

If you wish to open an issue that does not fall in any of the above categories, kindly open a blank issue: [HERE](https://github.com/tillioss/tilli-web-app/issues/new)


## Godot (Game Developers)

### Intro 
(What it is, How it works, How it’s used, What it has)

We have created 6 different types of strategies/ activities in Godot that help people regulate and manage their emotions better. It aids in reducing stress or anxiety during stressful/ negative scenarios, thus enabling oneself keep a positive self-image and outlook in life.

#### Ideology

If you want to know more about what are ABCDE strategies: [Read Here](https://docs.google.com/document/d/1LtxitcCUhgsUzjIeFYDdqus4t8h6SDbAjwVKQUtDt7A/edit?usp=sharing)

The 6 ABCDE Strategies are:

- Yoga
    - Development Files: [HERE](https://github.com/tillioss/Godot-Strategies-V1/tree/main/YogaActivity)
    - Design Documentation: [HERE](https://docs.google.com/document/d/1ZiZ07BwrDwRqOX5hrtREvo7ncnVkOR5u1zSYS4CkfOc/edit?usp=sharing)

- Bubble Pop
    - Development Files: [HERE](https://github.com/tillioss/Godot-Strategies-V1/tree/main/BubblePop)
    - Design Documentation: [HERE](https://docs.google.com/document/d/14SLCAqWyhhJSi7_0UrhkfbxTF3vAv6cq5oegouETnz0/edit?usp=sharing)

- Rainbow Breathing
    - Development Files: [HERE](https://github.com/tillioss/Godot-Strategies-V1/tree/main/RainbowActivity)
    - Design Documentation: [HERE](https://docs.google.com/document/d/1yAe6VvVNCmBjj--Tr7tOfmOGZ8HgcHIfR7i30y4HhZc/edit?usp=sharing)

- Water Drinking
    - Development Files: [HERE](https://github.com/tillioss/Godot-Strategies-V1/tree/main/WaterDrinkingActivity)
    - Design Documentation: [HERE](https://docs.google.com/document/d/1uUCKTr9SfK4VLlgN_3mwWfcPW4m5awM9zz3msXPGr5g/edit?usp=sharing)


- Colouring
    - Development Files: [HERE](https://github.com/tillioss/Godot-Strategies-V1/tree/main/Coloring%20Activity)
    - Design Documentation: [HERE](https://docs.google.com/document/d/1M9Rti033Abqa7Xfr2dA3SwCboLT4f4BAbtOEduMOKEA/edit?usp=sharing)

- Self Hug
    - Development Files: [HERE](https://github.com/tillioss/Godot-Strategies-V1/tree/main/Hug%20Activity)
    - Design Documentation: [HERE](https://docs.google.com/document/d/1yelkAW0z0afdggm5z2q1F6FO_AVTIzLUIeWrNK3vAWk/edit?usp=sharing)




#### Assigning Logic

The logic behind assigning one of the above mentioned strategies is explained here: [Read Here](https://docs.google.com/document/d/139G3rM3TD-hQW4VbKHdDTWL5wk0VNgFKFEB7FGFwVbs/edit?usp=sharing)
Please Note: As of now the logic is implemented as to test which strategy helps the kids better and will be further improved in the next iterations based on the feedback received from this version.


### Install & Run

- Download the Godot game engine from the official website here:[Godot](https://godotengine.org/)
- Unzip the downloaded file and run the Godot Application

How to open this project

- Clone this project to your PC
- Open Godot game engine
- Import the project that you've just cloned


### Dependencies/ References: 

Resources to learn Godot

- Good place to find documentation and tutorials for Godot: [Documentation and Tutorials](https://docs.godotengine.org/en/stable/index.html)
- Basic GDScript programming Interactive Tutorial: [Play here](https://gdquest.itch.io/learn-godot-gdscript)

### How to request/suggest a new strategy

If you wish to suggest a new strategy that could be beneficial for you and the Tilli community in the IDE kindly fill the following form:

- New Strategy Request Form: [HERE](https://github.com/tillioss/Godot-Strategies-V1/issues/new?assignees=Tilliforkids&labels=enhancement%2Cart+%26+design%2Cdevelopment&template=new_strategy_request_form.yml&title=Request+for+%5BNew+Strategy+Name%5D)


### How to give feedback or report bugs in existing mini games

If you encounter any issue or you are not able to figure out the same in the Godot Startegies, kindly report the issue on our official GitHub Forms: 

- Bug Report Form: [HERE](https://github.com/tillioss/Godot-Strategies-V1/issues/new?assignees=Tilliforkids&labels=bug%2Cdevelopment&template=bug_report_form.yml&title=Found+a+%5Bbug%5D+in+%5BABCDE+Strategy+Name%5D)
- Feedback/Doubts Form: [HERE](https://github.com/tillioss/Godot-Strategies-V1/issues/new?assignees=Tilliforkids%2CBriandsouza-17%2CHannah31George&labels=feedback%2Fdoubt%2Cdocumentation&template=feedback_or_doubt_form.yml&title=Have+a+%5Bfeedback%5D%2C+%5Bdoubt%5D)

You can also search for past issues or requests to check if any other user has already encountered your issue or suggested the same feature here: 

- For open issues (yet to be solved): [HERE](https://github.com/tillioss/Godot-Strategies-V1/issues?q=is%3Aopen+is%3Aissue)
- For closed issues (solved): [HERE](https://github.com/tillioss/Godot-Strategies-V1/issues?q=is%3Aissue+is%3Aclosed)

If you wish to open an issue that does not fall in any of the above categories, kindly open a blank issue: [HERE](https://github.com/tillioss/Godot-Strategies-V1/issues/new)



## Tilli-Machine-Learning

###     Intro 
(What it is, How it works, What it has)
This section is still work in progress and will be further extended & improved.

###  Install & Run

#### How to use this repository

Get a local copy in to your computer using Git Clone command
Add a data file to data folder and name it 'data_1.json'

###  How to Give Feedback or Report Bugs

If you encounter any issue or you are not able to figure out the same regarding the Machine Learning Component, kindly report the issue on our official GitHub Forms: 

- Bug Report Form: [HERE](https://github.com/tillioss/tilli-machine-learning/issues/new?assignees=Tilliforkids%2Cakshika47&labels=bug%2Cdevelopment&template=bug_report_form.yml&title=Found+a+%5Bbug%5D)
- Feedback/Doubts Form: [HERE](https://github.com/tillioss/tilli-machine-learning/issues/new?assignees=Tilliforkids%2Cakshika47&labels=feedback%2Fdoubt%2Cdocumentation&template=feedback_or_doubt_form.yml&title=Have+a+%5Bfeedback%5D%2C+%5Bdoubt%5D)

You can also search for past issues or requests to check if any other user has already encountered your issue or suggested the same feature here: 

- For open issues (yet to be solved): [HERE](https://github.com/tillioss/tilli-machine-learning/issues?q=is%3Aopen+is%3Aissue)
- For closed issues (solved): [HERE](https://github.com/tillioss/tilli-machine-learning/issues?q=is%3Aissue+is%3Aclosed)

If you wish to open an issue that does not fall in any of the above categories, kindly open a blank issue: [HERE](https://github.com/tillioss/tilli-machine-learning/issues/new)

---
id: Repo-Backend

---

# Backend Server (Backend Developers)

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

### How to Give Feedback or Report Bugs

Kindly go to the “Report Bugs, Issues or Share Feedback” Section in our Contribution Guidelines for filing any issue/bugs, feedback, to clarify doubts or propose a new feature through our GitHub forms.

### Join our Slack Community
Join our Slack community to connect with other members, ask questions, and collaborate on projects. [Slack Invite Link](https://tilliopensour-wyp9205.slack.com/join/shared_invite/zt-206f4f11s-HoII8Kob45f6WK3GPIIi6g#/shared-invite/email)
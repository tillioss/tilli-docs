---
id: getting-started-developer
---

# Getting Started 

Tilli is a web-based application with scala as backend and uses truffle as a tool to compile.
It uses MongoDB as a database for regular non-blockchain data persistence and solidity smart contract to execute transactions on Ethereum blockchain.

## Pre-requisite

To run Tilli in your system please make sure you have the following app and libraries installed.

- `Node-js --version == 10.18.1`
- `Yarn --version == 1.21.1`

---
## Installing Tilli Server

To set up this software on your machine locally:

Clone this repository https://github.com/tillioss/tilli-backend-server
```
$ cd tilli-backend-server
```

 **Note** :  Please Install Redis in Your System.

## Redis Setup 

To stop your redis
```/etc/init.d/redis-server stop```

If you need backup your existing data
```cd /var/lib/redis/cp dump.rdb dump1.rdb```

Replace redis data

```cp tilli-backend-server/data/dump.rdb /var/lib/redis/```

Restart your redis
```/etc/init.d/redis-server restart```

---
## File Setup
Move and extract data files from ```tilli-backend-server/data/files.zip``` to [your_data_path]

**Ex :**```cp tilli-backend-server/data/files.zip [your_data_path]```

---
## To run locally - using SBT.

```sbt "runMain com.teqbahn.bootstrap.StarterMain local 2553 8093  [ServerIP]  [RedisIP]:[RedisPort] [MailId] [MailPassword] [your_data_path]"```


- local - server running environment 

- 2553 - Akka Port 

- 8093 - Attp Port 

- httpHostName : 192.0.0.1


- [ServerIP]  - Replace your system IP Address 
 *** Ex : 192.0.0.1 ***

- [RedisIP] - Replace your Redis IP Address
  *** Ex : 127.0.0.1 ***

- [RedisPort] -  Replace your Redis Port
  *** Ex : 6379 ***

**If you required send mail, Please configure mail setup otherWise use the dummy values.**

- [MailId]  -  Replace your mail id 
 *** Ex : xxxx@xyz.com ***

- [MailPassword]  -  Replace your password 
 *** Ex : password123 ***

- [your_data_path] - Replace your system filepath 
 *** Ex : /html/tilli ***

*** Ex : ***
```sbt "runMain com.teqbahn.bootstrap.StarterMain local 2553 8093  192.1.0.1  127.0.0.1:6379 xxxx@xyz.com password123 /html/tilli"```

---
## Installing Tilli Web App

### 1. Configuration :

a. Need to change IP address and Port in config/Myconstant.js :

**Ex apiURL :**  http://192.yyy.1.xxx:8093/tilli-api/

### 2. How to run? Yarn/npm/
a. Use below CMD to install modules :

``npm install``

b. Enter below CMD to start :

``npm start``

**Running Url :**  http://localhost:3023/tilli-web/

---

## Installing Tilli IDE

### 1. Configuration :
a. Need to change IP address and Port in config/Myconstant.js :

**Ex apiURL :** http://192.yyy.1.xxx:8093/tilli-api/

### 2. How to run? Yarn/npm/..
a. Use below CMD to install modules :

``npm install``

b. Enter below CMD to start :

``npm start``

**Running Url :** 'http://localhost:3022/tilli/'

UserName :tilliadmin

Password :tilliadmin

---
Last updated:30/11/2022

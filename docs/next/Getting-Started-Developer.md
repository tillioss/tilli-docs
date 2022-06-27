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


## Installing Tilli Server

To set up this software on your machine locally:

Clone this repository https://github.com/tillioss/tilli-backend-server
```
$ cd tilli-backend-server
```
To run locally - using SBT.
```
sbt "runMain com.teqbahn.bootstrap.StarterMain local 2553 8093 192.0.0.1 127.0.0.1:6379 xxxx@xyz.com password123 saltkey"
```
server running environment : local

akkaPort : 2553

httpPort : 8093

httpHostName : 192.0.0.1

Replace your system IP Address : 192.0.0.1

Replace your mail id : xxxx@xyz.com

Replace your password : password123

Replace your host and port number(host:port) 127.0.0.1:6379





## Installing Tilli Web

1. Clone this repository https://github.com/tillioss/tilli-web-app
2. Update .env file to add URL of your Tilli Web
   `REACT_APP_API_SERVER=http://localhost:3800`

3. Install required dependencies and compile smart contracts
   ``npm install`

4. Start the server
   `npm start`
5. Now, in your browser go to http://localhost:3000 and follow the setup instructions on screen.



## Installing Tilli IDE

1. Clone this repository https://github.com/tillioss/tilli-ide.git
2. Update .env file to add URL of your Tilli IDE
   `REACT_APP_API_SERVER=http://localhost:3800`

3. Install required dependencies and compile smart contracts
   ``npm install`

4. Start the server
   `npm start`
5. Now, in your browser go to http://localhost:3000 and follow the setup instructions on screen.


Last updated:27/06/2022

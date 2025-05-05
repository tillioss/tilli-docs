---
id: Getting-started-developer
---

# Getting Started

Tilli is a web-based application with scala as backend and uses truffle as a tool to compile.
It uses MongoDB as a database for regular non-blockchain data persistence and solidity smart contract to execute transactions on Ethereum blockchain.

## Pre-requisite

To run Tilli in your system please make sure you have the following app and libraries installed.

- `Node-js --version >= 20.0.0`
- `Yarn --version >= 1.22.20`

---

## Installing Tilli Assessment Tool

1. Clone the repository:
   ```bash
   git clone https://github.com/<owner>/tilli-assessment-tool.git
   cd tilli-assessment-tool
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```
3. Create a `.env.local` file in the project root with the following content:
   ```dotenv
   NEXT_PUBLIC_APPWRITE_PROJECT_ID=<Your Appwrite Project ID>
   NEXT_PUBLIC_APPWRITE_DATABASE_ID=<Your Database ID>
   NEXT_PUBLIC_APPWRITE_PARTICIPANTS_COLLECTION_ID=<Participants Collection ID>
   NEXT_PUBLIC_APPWRITE_ASSESSMENTS_COLLECTION_ID=<Assessments Collection ID>
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Installing Tilli Server

To set up this software on your machine locally:

Clone this repository https://github.com/tillioss/tilli-backend-server

```
$ cd tilli-backend-server
```

**Note** : Please Install Redis in Your System.

## Redis Setup

To stop your redis
`/etc/init.d/redis-server stop`

If you need backup your existing data
`cd /var/lib/redis/cp dump.rdb dump1.rdb`

Replace redis data

`cp tilli-backend-server/data/dump.rdb /var/lib/redis/`

Restart your redis
`/etc/init.d/redis-server restart`

---

## File Setup

Move and extract data files from `tilli-backend-server/data/files.zip` to [your_data_path]

**Ex :**`cp tilli-backend-server/data/files.zip [your_data_path]`

---

## To run locally - using SBT.

`sbt "runMain com.teqbahn.bootstrap.StarterMain local 2553 8093  [ServerIP]  [RedisIP]:[RedisPort] [MailId] [MailPassword] [your_data_path]"`

- local - server running environment

- 2553 - Akka Port

- 8093 - Attp Port

- httpHostName : 192.0.0.1

- [ServerIP] - Replace your system IP Address
  **_ Ex : 192.0.0.1 _**

- [RedisIP] - Replace your Redis IP Address
  **_ Ex : 127.0.0.1 _**

- [RedisPort] - Replace your Redis Port
  **_ Ex : 6379 _**

**If you required send mail, Please configure mail setup otherWise use the dummy values.**

- [MailId] - Replace your mail id
  **_ Ex : xxxx@xyz.com _**

- [MailPassword] - Replace your password
  **_ Ex : password123 _**

- [your_data_path] - Replace your system filepath
  **_ Ex : /html/tilli _**

**_ Ex : _**
`sbt "runMain com.teqbahn.bootstrap.StarterMain local 2553 8093  192.1.0.1  127.0.0.1:6379 xxxx@xyz.com password123 /html/tilli"`

---

## Installing Tilli Web App

### 1. Configuration :

a. Need to change IP address and Port in config/Myconstant.js :

**Ex apiURL :** http://192.yyy.1.xxx:8093/tilli-api/

### 2. How to run? Yarn/npm/

a. Use below CMD to install modules :

`npm install`

b. Enter below CMD to start :

`npm start`

**Running Url :** http://localhost:3023/tilli-web/

---

## Installing Tilli IDE

### 1. Configuration :

a. Need to change IP address and Port in config/Myconstant.js :

**Ex apiURL :** http://192.yyy.1.xxx:8093/tilli-api/

### 2. How to run? Yarn/npm/..

a. Use below CMD to install modules :

`npm install`

b. Enter below CMD to start :

`npm start`

**Running Url :** 'http://localhost:3022/tilli/'

UserName :tilliadmin

Password :tilliadmin

---

Last updated:06/12/2024

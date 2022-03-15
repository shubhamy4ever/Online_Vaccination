# Online Vaccination
## _Graduation project 2022_

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Online vaccination is a website made with tech stack MERN Stack here are some of the features:

- Secure Passwords stored in database using hashing and salting
- jwt authentication used
- Modern UI
- Very stable (Have fixed multiple bugs and added many features)

## Tech

Online Vaccination uses a number of open source techstack to work properly:

- [React.js](https://reactjs.org/) - Developed by META And is Open Source!
-  [VSCode](https://code.visualstudio.com/) - awesome text editor by Microsoft
- [Bootstrap](https://getbootstrap.com/) - great UI boilerplate for modern web apps
- [Node.js](https://nodejs.org/en/) - evented I/O for the backend
- [Express.js](https://expressjs.com/) - fast node.js network app framework
- [Mongo DB](https://www.mongodb.com/) - A document based database system
-  Plain CSS  - Normal css by me

And of Project Online Vaccination itself is open source with a Right now private repo
 on GitHub.

## Installation

Online Vaccination requires [Node.js](https://nodejs.org/) v10+ to run.
Also MongoDB Should be installed from their official website  [MongoDB](https://www.mongodb.com/try/download/community)

Install the frontend dependencies and devDependencies.
Open Powershell

```sh
cd Online_Vaccination_AllKeys
npm i
```

Create build folder using following commands
```sh
npm run build
```

Install the dependencies for Backend

```sh
cd ./Backend
npm i
```

Create .env file and add the following in Backend folder
```sh
DB_CONNECTION=mongodb://localhost:27017/OnlineVaccination?readPreference=primary&appname=MongoDB%20Compass&ssl=false
JWT_SECRET=your jwt secret for admin password 
JWT_SECRET_Admin= your jwt secret for admin password 
```



I have shell scripted in Package.json to run both frontend build folder and backend using one command run the following
```sh
cd ..
npm run production
```


And if you want to do changes and want to reflect it in live mode run react in development not from build folder using this command
```sh
cd ..
npm run development
```

## License

Apache License 2.0



_Any contributions to above project is welcomed!_

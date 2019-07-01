# PetCalendarAPI

Description TO_DO

## APP set up

### Init node.js
in empty folder run `npm init`

### install following libraries
* [express](https://www.npmjs.com/package/express)
* [nodemon](https://www.npmjs.com/package/nodemon)
* [body-parser](https://www.npmjs.com/package/body-parser) //https://stackoverflow.com/questions/38306569/what-does-body-parser-do-with-express

### modify package.json file
put in `package.json` file `"start:server": "nodemon server.js"`

### in environments folder
add new file `environment.js`

```javascript
const environment = {
  production: false,
  db_url: 'mongodb://localhost:27017/DATA_BASE_NAME',
  version: '0.1'
};
 
module.exports = environment;
```

### in app folder
add new file `app.js`

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const environment = require('../environments/environment');
 
const URL_DB = environment.db_url;
 
const app = express();
 
// connection to mongoDB
mongoose
    .connect(URL_DB, { useNewUrlParser: true })
    .then(() => { console.log("Connected to database!"); })
    .catch(() => { console.log("Connection to mongoDB failed!"); });
 
// CORS configuration https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
    next();
})
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
 
module.exports = app;
```

### add server.js file

```javascript
const app = require("./src/app/app");
const debug = require("debug")("node-angular");
const http = require("http");

const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);
```

### run server
`npm run start:server`

The message "Connected to database!" should show up

### if error occurs
check if `main: index.js` line from package.js file was removed.

## first API

### model - mongoose.Schema
[Schemas](https://mongoosejs.com/docs/guide.html)

```javascript
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const userSchema = new Schema({
    login: {type: String, require: true, unique: true },
    password: {type: String, require: true},
    role: {type: String, require: true},
});
 
module.exports = mongoose.model('User', userSchema)
```

### route - express.Router()
[API documentation](https://mongoosejs.com/docs/api.html)
In example fake-jwt-token is used

```javascript
const express = require("express");
const router = express.Router();
const User = require("../model/user");

// get user by login / password
router.get("/:login" + "/:password", (req, res, next) => {
  User.findOne({ login: req.params.login, password: req.params.password }).exec((err, user) => {
    if (user) {
      res.status(200).json({user, token: 'fake-jwt-token'});
    } else {
      res.status(404).json({ message: "User not found" });
    }
  });
});

// get all users
router.get('', (req, res, next) => {
    User.find()
        .then(users => {
            res.status(200).json(users);
        });

});
module.exports = router;
```

### app.js

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const environment = require('../environments/environment'); 

const usersRoutes = require('./routes/users'); //express router

const URL_DB = environment.db_url;
const URL_API_USERS = '/api/users'; //link to database
 
const app = express();
 
// connection to mongoDB
mongoose
    .connect(URL_DB, { useNewUrlParser: true })
    .then(() => { console.log("Connected to database!"); })
    .catch(() => { console.log("Connection to mongoDB failed!"); });
 
// CORS configuration https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
    next();
})
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(URL_API_USERS, usersRoutes); //app conection
 
module.exports = app;
```

In browser `http://localhost:3000/api/users` - display all users from mongoDB.


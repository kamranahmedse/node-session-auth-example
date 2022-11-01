const express = require('express');
const sessions = require('express-session');

const LoginHandler = require('./handlers/login.js');
const ProcessLoginHandler = require('./handlers/process-login.js');
const HomeHandler = require('./handlers/home.js');
const LogoutHandler = require('./handlers/logout.js');

const app = express();

app.use(sessions({
  secret: "some secret",
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 // 24 hours
  },
  resave: true,
  saveUninitialized: false,
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', HomeHandler);
app.get('/login', LoginHandler);
app.post('/process-login', ProcessLoginHandler);
app.get('/logout', LogoutHandler);

app.listen(3000, () => console.log(`Server Running at port 3000`));


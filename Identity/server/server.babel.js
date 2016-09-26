import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import session from 'express-session';

// set up
const app = express();
const port = process.env.PORT || 3000;
const router = express.Router();
const sessionMiddleware = session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
});

// configuration
mongoose.connect('mongodb://dbuser:dbpwd@ds041526.mlab.com:41526/datafiniti');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(sessionMiddleware);

// routes
require('./routes')(router);
app.use('/', router);

// launch
app.listen(port);
console.log('App started on port ' + port);

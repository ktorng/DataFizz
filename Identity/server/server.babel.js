import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import session from 'express-session';

// set up
const app = express();
const port = process.env.PORT || 3000;
const assetFolder = path.join(__dirname, '../src/public');
const router = express.Router();
const sessionMiddleware = session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
});

// configuration
mongoose.connect('mongodb://dbuser:dbpwd@ds041526.mlab.com:41526/datafiniti');
app.use(express.static(assetFolder));
app.use('/dist', express.static('dist'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(sessionMiddleware);

// routes
require('./routes')(router);
app.use('/api', router);

// launch
app.listen(port, () => {
  console.log('App started on port ' + port);
});

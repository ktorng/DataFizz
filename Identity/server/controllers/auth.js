var jwt = require('jsonwebtoken');
var User = require('../models/user');
var config = require('../../config/config');

module.exports = {
  register
}

function generateToken(user) {
  return jwt.sign({ id: user._id }, config.jwtSecret, { expiresIn: 10080 });
}

function checkExistingEmail(email) {
  return new Promise(function(resolve, reject) {
    return User.findOne({ email: email }, (err, user) => {
      if (err) {
        reject(err);
      } else {
        resolve(user ? true : false);
      }
    })
  });
}

function register(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  // see if email already exists
  checkExistingEmail(email)
  .then((found) => {
    // return error if email exists
    if (found) {
      res.status(422).send({ message: 'An account with this email already exists' });
    // create new user if email does not exist
    } else {
      const newUser = new User({
        email,
        password
      });

      // save user to db
      newUser.save((err, user) => {
        if (err) throw err;
        // respond with jwt if user was created
        res.status(201).json({
          token: generateToken(user),
          id: user._id
        });
      });
    }
  })
  .catch((err) => {
    next(err);
  })
}

function login(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  // see if email exists
  checkExistingEmail(email)
  .then((user) => {
    // return error if user does not exist
    if (!user) {
      res.status(422).send({ message: 'Your login details could not be verified. Please try again.' });
    // compare password if user does exist
    } else {
      user.comparePassword(password)
      .then((isMatch) => {
        // return error if passwords do not match
        if (!isMatch) {
          res.status(422).send({ message: 'Your login details could not be verified. Please try again.' });
        // return jwt if passwords match
        } else {
          res.status(200).json({
            token: generateToken(user),
            id: user._id
          });
        }
      })
    }
  })
  .catch((err) => {
    next(err);
  })
}

var User = require('../models/user');

module.exports = {
  signUp
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

function signUp(req, res, next) {
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
      })

      // save user to db
      newUser.save((err) => {
        if (err) throw err;
        res.status(201).send({ message: 'You have successfully signed up' });
      });
    }
  })
  .catch((err) => {
    next(err);
  })
}

var bcrypt = require('bcrypt-nodejs');

module.exports = {
  generateSalt,
  hashPassword,
  comparePassword
};

function generateSalt(rounds) {
  return new Promise(function(resolve, reject) {
    bcrypt.genSalt(rounds, function(err, salt) {
      if (err) {
        reject(err);
      } else {
        resolve(salt);
      }
    });
  });
}

function hashPassword(password, salt) {
  return new Promise(function(resolve, reject) {
    bcrypt.hash(password, salt, null, function(err, hash) {
      if (err) {
        reject(err);
      } else {
        resolve(hash);
      }
    });
  });
}

function comparePassword(attemptedPassword, hashedPassword) {
  return new Promise(function(resolve, reject) {
    bcrypt.compare(attemptedPassword, hashedPassword, function(err, isMatch) {
      if (err) {
        reject(err);
      } else {
        resolve(isMatch);
      }
    });
  });
}

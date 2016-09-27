var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var util = require('../util/util');
var Schema = mongoose.Schema;
const SALT_WORK_FACTOR = 10;

// define model
var userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

// moddleware to hash password before saving to db
userSchema.pre('save', function(next) {
  const user = this;

  // only hash the password if it has been modified or is new
  // if (!user.isModified('password')) return next();

  // generate a salt
  util.generateSalt(SALT_WORK_FACTOR)
  // hash the password using our new salt
  .then((salt) => {
    return util.hashPassword(user.password, salt);
  })
  // override the cleartext password with the hashed one
  .then((hash) => {
    user.password = hash;
    console.log(user.username, ' saved')
    next();
  })
  .catch((err) => {
    next(err);
  });
});

userSchema.methods.comparePassword = function(attemptedPassword) {
  return util.comparePassword(attemptedPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);

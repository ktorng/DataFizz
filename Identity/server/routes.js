var path = require('path');
var Auth = require('./controllers/auth');

module.exports = function(router) {
  router.get('/auth/signup', Auth.signup);
}

var path = require('path');
var Auth = require('./controllers/auth');

// api routes
module.exports = function(router) {
  router.post('/auth/signUp', Auth.signUp);
}

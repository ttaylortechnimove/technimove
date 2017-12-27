const api = require('../controllers/api.server.controller');

module.exports = ( app ) => {
  
  app.route( '/api/login' ).get( api.getLogin )
  app.route( '/api/timesheet' ).get( api.getTimesheet );
  
};

const web = require( '../controllers/web.server.controller.js' );
const passport = require('passport');

module.exports = ( app ) => {
    // app.route('/').all( web.angularRouter );
    
    // app.route('*').get( web.angularRouter );
    app.route('/register').post( web.create );
    app.route('/login').post( passport.authenticate('local', {
        successRedirect: 'http://localhost:5000/dashboard',
        failureRedirect: '/',
        failureFlash: true
    }) );

    //app.route('/auth').post( web.login );
    //app.route('/timesheet').get( web.angularRouter );
};
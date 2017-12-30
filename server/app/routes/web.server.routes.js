const web = require( '../controllers/web.server.controller.js' );
const passport = require('passport');

module.exports = ( app ) => {
    // app.route('/').all( web.angularRouter );
    
    // app.route('*').get( web.angularRouter );
    app.route('/create-account').post( web.create );
    app.route('/auth').post( passport.authenticate('local', {
        successRedirect: 'http://127.0.0.1:5000/dashboard',
        failureRedirect: '/',
        failureFlash: true
    }) );

    //app.route('/auth').post( web.login );
    //app.route('/timesheet').get( web.angularRouter );
};
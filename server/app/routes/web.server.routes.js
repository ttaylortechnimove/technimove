const web = require( '../controllers/web.server.controller.js' );
const mongoose = require('../../config/mongoose');

module.exports = ( app ) => {
    const db = mongoose();
    // console.log(db)
    app.route('/').all( web.angularRouter );
    // app.route('/about').get( web.angularRouter );
    //app.route('*').get( web.angularRouter );
    app.route('/create-account').post( web.createAccount );
    // app.route('/login').get( web.angularRouter );
    //app.route('/timesheet').get( web.angularRouter );
};
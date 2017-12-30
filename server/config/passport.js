const passport = require('passport');
const mongoose = require('mongoose');

module.exports = ( ) => {
    const UserAccount = mongoose.model('UserAccount');
    
    passport.serializeUser( ( user, done ) => {
        done( null, user.id );
    } );
    passport.deserializeUser( ( id, done ) => {
        UserAccount.findOne({
            _id:id
            }, '-password -salt', ( err, user ) => { 
                done( err, user );
            }
        )
    } );

    require('./strategies/local.js')();
}
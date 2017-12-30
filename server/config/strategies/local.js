const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserAccount = require('mongoose').model('UserAccount');

module.exports = () => {
    passport.use( new LocalStrategy( ( email, password, done ) => {
        UserAccount.findOne({
            email: email
        }, ( err, user ) => {
            if( err ) {
                return done( err );
            }
            if( !user ){
                return done( null, false, {
                    message: 'Unknown user'
                });
            }
            if( !user.authenticate( password ) ){
                return done( null, false, {
                    message: 'Invalid password'
                })
            }
            return done( null, user )
        })
    }) );
}
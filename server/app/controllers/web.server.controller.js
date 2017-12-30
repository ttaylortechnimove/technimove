const UserAccount = require('mongoose').model('UserAccount');
const passport = require('passport');

const getErrorMessage = ( err ) => {
    let message = '';
    if( err.code ){
        switch( err.code ){
            case 11000:
            case 11001:
                message = 'User already exists';
                break;
            default:
                messgae = 'Something went wrong';
        }
    }else{
        for(let errName in err.errors ){
            if( err.errors[errName].message ) message = err.errors[errName].messsage; 
        }
    }
    return message;
}

exports.angularRouter = ( req, res, next ) => {
    res.render('index.html');
    // next();
};
exports.create = ( req, res, next ) => {
    let user = new UserAccount( req.body );      
    user.save( ( err ) => {
        if( err ){
            return next(err);
        }else{
            res.json(user);
        }
    });  
};
exports.login = ( req, res, next ) => {
    //let user = new UserAccount( req.body );
    //user.find({})
    console.log( req.body );
    res.json( req.body );
}
exports.logout = ( req, res ) => {
    req.logout();
    res.redirect('/');
};
exports.findAccounts = ( req, res, next ) => {
    let accounts = new UserAccount( req.body );
    console.log(accounts.find())
};
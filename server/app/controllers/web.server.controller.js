const mongoose = require('../../config/mongoose');
//const mongo = require('../../config/mongodb');
const UserAccount = require('mongoose').model('UserAccount');

exports.angularRouter = ( req, res, next ) => {
    res.render('index.html');
    //next();
   // console.log(process.cwd()+'..')
};

exports.createAccount = ( req, res, next ) => {
    //let db = mongo();
    let collection = "accounts";
    //db.
    //console.log(this.db);
    console.log( "DATA: "+ req.body.firstName );
    
    let userAccount = new UserAccount(JSON.stringify( req.body ));
    userAccount.save( ( err ) => {
        if( err ){
            return next(err);
        }else{
            res.json(user);
        }
    });
}
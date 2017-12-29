exports.angularRouter = ( req, res, next ) => {
    res.render('index.html');
    //next();
   // console.log(process.cwd()+'..')
};

exports.createAccount = ( req, res ) => {
    console.log( req );
    res.send('Hello from create account');
}
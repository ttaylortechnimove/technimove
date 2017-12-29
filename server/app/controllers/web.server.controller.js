exports.angularRouter = ( req, res, next ) => {
    res.render('index.html');
    //next();
   // console.log(process.cwd()+'..')
};

exports.createAccount = ( req, res ) => {
    console.log( "POST: " + req.body );
    res.send('Hello from create account');
}
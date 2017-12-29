const bodyParser = require( 'body-parser' );
const compress = require( 'compression' );
const config = require( './config' );
const cookieParser = require( 'cookie-parser' );
const cors = require( 'cors' );
const express = require( 'express' );
const favicon = require( 'serve-favicon' );
const flash = require( 'connect-flash' );
const http = require( 'http' );
const methodOverride = require( 'method-override' );
const morgan = require( 'morgan' );
const path = require( 'path' );
const passport = require( 'passport' );
const session = require( 'express-session' );
const socketio = require( 'socket.io' );
const originsWhitelist = [ 
  'http://127.0.0.1:5000', // **NG SERVE
  'http://127.0.0.1:8300' // **NODEMON [webServer]
 ];
/*const corsOptions = {
  origin: ( origin, callback ) => {
    var isWhitelisted = originsWhitelist.indexOf( origin ) !== -1;
    callback( null, isWhitelisted );
  },
  credentials: true
}*/

const corsOptions = {
  allowHeaders: [ "Cache-Control", "Pragma", "Origin",  "Authorization", "Content-Type", "X-Requested-With", "Accept", "X-Access-Token" ],
  credentials: true,
  methods: "GET, HEAD, OPTIONS, PUT, PATCH, POST, DELETE",
  origin: originsWhitelist,
  preflightContinue: false
};

module.exports = () => {
  const app = express();
  app.use( ( req, res, next ) => {
    res.header( "Access-Control-Allow-Credentials", "true");
    res.header( "Access-Control-Allow-Origin", "*");
    res.header( "Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin,  Authorization, Content-Type, X-Requested-With, Accept" );
    res.header( "Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS" );
    next()
  });

  const server = http.createServer( app );
  const io = socketio.listen( server );

  app.disable( 'x-powered-by' );

  if( process.env.NODE_ENV === 'dev' ) {
    app.use( morgan( 'dev' ) );
  } else if( process.env.NODE_ENV === 'prod' ){
    app.use( compress() );
  }

  // app.use( favicon( path.join( process.cwd(), '/favicon.png') ) );
  app.use( bodyParser.urlencoded( { extended: true } ) );
  app.use( bodyParser.json() );
  app.use( methodOverride() );
  app.use( cookieParser() );
  app.use( cors( corsOptions ) );
  app.options( "*", cors( corsOptions ) );

  app.set( 'views', path.join( process.cwd(), 'dist' ) );
  app.engine( 'html', require( 'ejs' ).renderFile );
  app.set( 'view engine', 'ejs' );

  /* ROUTES */
  require( process.cwd() + '/server/app/routes/api.server.routes.js' )( app );
  require( process.cwd() + '/server/app/routes/web.server.routes.js' )( app );

  app.use( express.static( process.cwd() + '/dist' ) );

  return server;

}

const bodyParser = require( 'body-parser' );
const compress = require( 'compression' );
const config = require( './config' );
const cookieParser = require( 'cookie-parser' );
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

module.exports = () => {
  const app = express();
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

  app.set( 'views', path.join( process.cwd(), 'dist' ) );
  app.engine( 'html', require( 'ejs' ).renderFile );
  app.set( 'view engine', 'ejs' );

  /* ROUTES */
  require( process.cwd() + '/server/app/routes/api.server.routes.js' )( app );
  require( process.cwd() + '/server/app/routes/web.server.routes.js' )( app );

  app.use( express.static( process.cwd() + '/dist' ) );

  return server;

}

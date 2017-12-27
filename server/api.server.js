process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
const express = require( process.cwd() + '/server/config/express' );
const port = 8400;

module.exports = () => {
    const app = express();
    app.listen( port );

    return app;
};
console.log( 'API Server started @: http://127.0.0.1:' + port + '/' );

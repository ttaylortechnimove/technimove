process.env.ENV = process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
const express = require( process.cwd() + '/server/config/express' );
// const app = express();
const port = 8300;
// app.listen( port );

// module.exports = app;
module.exports = () => {
    const app = express();
    app.listen( port );

    return app;
};
console.log('WEB Server started @: http://127.0.0.1:' + port );

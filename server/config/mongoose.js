const config = require( './config' );
const mongoose = require( 'mongoose' );

module.exports = () => {
    const db = mongoose.connect( config.db.mongodb );

    require( '../app/models/user-account.server.model' );
    
    return db;
};

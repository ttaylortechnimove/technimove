const config = require('./config');
const mongodb = require('mongodb').MongoClient;

module.exports = () => {
    const db = mongodb.connect(config.db.mongodb);
 
    return db;
};

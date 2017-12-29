const config = require('./config');
const mongodb = require('mongodb').MongoClient;

module.exports = () => {
// module.exports = ( database ) => {
    const db = mongodb.connect(config.db.mongodb);
    //const db = mongodb.connect(config.open('mongodb', database));
 
    return db;
};

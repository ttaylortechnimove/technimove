const username = '';
const password = '';
const host = '127.0.0.1';
const mongodbPort = '27017/';
const mysqlPort = '3306/';
const database = 'development';

module.exports = {
    open:( dbType, db ) => {
        if(dbType === 'mysql'){
            return host + ':' + mysqlPort
        }
        if(dbType === 'mongodb'){
            return 'mongodb://' + username + password + host + ':' + mongodbPort + db
        }
        return false;
    },
    db:{
        mysql: host + ':' + mysqlPort,
        mongodb: 'mongodb://' + username + password + host + ':' + mongodbPort + database
    },
    sessionSecret:'developmentSessionSecret',
    autoIndex:false,
    facebook:{
        clientID:'',
        clientSecret:'',
        callbackURL:''
    },
    twitter:{
        clientID:' O9xFWAO6DV1sdvMbv01nKF1y7',
        clientSecret:' BvxQC4VC3UX8RE6AiELivXC5u526GR0lO4ddN2Cik3JUQFDbKm',
        callbackURL:''
    },
    google:{
        clientID:'',
        clientSecret:'',
        callbackURL:''
    }
}

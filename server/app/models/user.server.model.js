const mongoose = require( 'mongoose' );
const crypto = require('crypto');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: { 
        type:String,
        trim :true,
        required: 'First name is required'
    },
    lastName: { 
        type:String,
        trim :true,
        required: 'Last name is required'
    },
    companyName: { 
        type:String,
        trim :true,
        required: 'Company name is required'
    },
    email: { 
        type:String,
        trim :true,
        unique: true,
        required: 'Email is required'
    },
    password: {
        type:String,
        validate: [
            ( password ) => {
                return password && password.length >= 6;
            },
            'Password should be longer'
        ],
        required: true
    },
    salt: {
        type: String
    },
    provider: {
        type: String,
        required: 'Provider is required'
    },
    providerId: String,
    poviderData: {},
    role: {
        type: String,
        enum: [ "Admin", "Owner","Client", "Employee" ]
    },
    created: {
        type: Date,
        default: Date.now
    }

});

// UserAccountSchema.statics.findByName( ( name, callback ) => {} )

UserSchema.pre('save', ( next ) => {
    
    if ( this.password ) {
        this.salt = new Buffer( crypto.randomBytes( 16 ).toString( 'base64' ), 'base64' );
        this.password = this.hashPassword( this.password );
        console.log('Password: '+this.password );
    }
    next(); 
});

UserSchema.virtual('fullName')
    .get( () => {
            return this.firstName + ' ' + this.lastName; 
        }
    )
    .set( ( fullName ) => {
        var splitName = fullName.split(' ');  
        this.firstName = splitName[0] || '';
        this.lastName = splitName[1] || '';
    }
);

UserSchema.methods.hashPassword = ( password ) => {
    return crypto.pbkdf2Sync( password, this.salt, 10000, 64 ).toString( 'base64' );
};
UserSchema.methods.authenticate = ( password ) => {
    return this.password ===  this.hashPassword( password );
}

UserSchema.statics.findUniqueUsername = ( username, suffix, callback ) => {
    var _this = this;
    var possibleUsername = username + (suffix || '');

    _this.findOne({
        username: possibleUsername
    }, ( err, user) => {
        if( !err ) {
            if( !user ) {
                callback(possibleUsername);
            } else {
                return _this.findUniqueUsername( username, ( suffix || 0 ) + 1, callback );
            }
        } else {
            callback( null );
        }
    })
} ;

UserSchema.set( 'toJSON',
    {
        getters: true,
        virtuals: true 
    }
);

UserSchema.post( 'save', ( next ) => {
    if( this.isNew ) {
        console.log("A new user was created.");
    }else{
        console.log("A user updated details.");
    }
} )

mongoose.model( 'User', UserSchema );
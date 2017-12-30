const mongoose = require( 'mongoose' );
const crypto = require('crypto');
const Schema = mongoose.Schema;

const UserAccountSchema = new Schema({
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
        trim: true,
        validate: [
            ( password ) => {
                return password && password.length >= 6;
            },
            'Password should be longer'
        ]
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

UserAccountSchema.virtual('fullName')
    .get( () => {
            return this.firstName + ' ' + this.lastName; 
        }
    )
    .set( ( fullName ) => {
        let splitName = fullName.split(' ');  
        this.firstName = splitName[0] || '';
        this.lastName = splitName[1] || '';
    }
);

UserAccountSchema.pre('save', ( next ) => {
    if ( this.password ) {
        this.salt = new Buffer( crypto.randomBytes( 16 ).toString( 'base64' ), 'base64' );
        this.password = this.hashPassword( this.password );
    }
    next(); 
});
UserAccountSchema.methods.hashPassword = ( password ) => {
    return crypto.pbkdf2Sync( password, this.salt, 10000, 64 ).toString( 'base64' );
};
UserAccountSchema.methods.authenticate = ( password ) => {
    return this.password ===  this.hashPassword( password );
}

UserAccountSchema.set( 'toJSON', {  getters: true,  virtuals: true });

UserAccountSchema.post( 'save', ( next ) => {
    if( this.isNew){
        console.log("A new user was created.");
    }else{
        console.log("A user updated details.");
    }
} )

mongoose.model( 'UserAccount', UserAccountSchema );
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const UserAccountSchema = new Schema({
    firstName: String,
    lastName: String,
    companyName: String,
    email: String,
    password: String
});

mongoose.model( 'UserAccount', UserAccountSchema );
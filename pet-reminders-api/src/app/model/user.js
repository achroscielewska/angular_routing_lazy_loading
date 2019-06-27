const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const userSchema = new Schema({
    login: {type: String, require: true, unique: true },
    password: {type: String, require: true},
    role: {type: String, require: true},
});
 
module.exports = mongoose.model('User', userSchema)
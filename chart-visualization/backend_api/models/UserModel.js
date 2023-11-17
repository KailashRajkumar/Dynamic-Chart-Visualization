const mongoose = require('mongoose');
const bcrypt=require("bcrypt");
const Schema = mongoose.Schema;
// Defining the user schema
const userSchema = new Schema({
    username:{
        type:"string",
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:"string",
        required:true
    }
});

// Middleware function to hash the user's password before saving
userSchema.pre('save',async function()
{
const user=this;
const salt= await bcrypt.genSalt(10);
const hash=await bcrypt.hash(user.password,salt);
user.password=hash;
    
})
// Creating the User model
const User = mongoose.model('loginData', userSchema);
module.exports = User;
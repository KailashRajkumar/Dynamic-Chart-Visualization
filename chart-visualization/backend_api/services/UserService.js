const model=require("../models/UserModel")
const jwt=require("jsonwebtoken")

class userservices{
    // Method for user registration
    static async register(username,password){
        try{
            return await model.create({username,password})
        }
        catch(err){
            console.log(err);
        }
    }
    // Method to check if a user exists in the database
    static async checkuser(username){
        try{
            return await model.findOne({username})
        }
        catch(err){
            console.log(err);
        }
    }
    // Method to generate a JSON Web Token (JWT) for authentication
    static async genaratetoken(Tdata,Scode){
        try{
            return await jwt.sign(Tdata,Scode,{expiresIn:"1y"})
        }
        catch(err){
            console.log(err);
        }
    }
}


module.exports=userservices;
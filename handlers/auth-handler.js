import User from "../database/user.js";
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

async function registerUser(registeruserData) {
    try {
        const hashPassword = await bcrypt.hash(registeruserData.password,10)
        let user = new User({
            name : registeruserData.name,
            password : hashPassword,
            email : registeruserData.email
        })
        await user.save();
        return user.toObject();
    } catch (error) {
        return error;
    }
}


async function loginUser(loginUserData) {
    try {
        const user = await User.findOne({email : loginUserData.email})
        if(!user){
            return null;
        }
       const isPasswordMatch = await bcrypt.compare(loginUserData.password,user.password);
       if(isPasswordMatch){
           const token = jwt.sign({ 
             name : user.name,
             email : user.email,
             isAdmin : user.isAdmin
           }, "secretkey" , {expiresIn : '1h'})
           const {password , ...userInfo } = user._doc;
           return {token , userInfo};
       }  
    } catch (error) {
        return error;
    } 
    
}
export {registerUser , loginUser};
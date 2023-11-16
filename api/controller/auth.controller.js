import User from "../model/user.model.js"
import bcryptjs from "bcryptjs"
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
export const signup = async (req, res, next)=>{
    const {username, email, password} = req.body;
    const hasdedPassword = await bcryptjs.hashSync(password, 12);
    const newUser = new User({
        username,
        email,
        password : hasdedPassword
    });
    try {
        await newUser.save();
        res.status(200).json({
        "message" : "User created successfully"
    });
        
    } catch (error) {
        next(error);
    }

}

export const signin = async (req, res, next)=>{
    const {email, password} = req.body;
    try {
        const validUser = await User.findOne({email});
        if(!validUser){
            return next(errorHandler(404, "User not found"));
        }
        const validpassword = await bcryptjs.compare(password, validUser.password); 
        if(!validpassword){
            return next(errorHandler(404, "Wrong password"));
        }
        const token = jwt.sign({id : validUser._id}, process.env.JWT_SECRET);

        const {password : pass, ...rest} = validUser._doc;
        res
            .cookie("access_token", token, {httpOnly : true})
            .status(200)
            .json(rest);

    } catch (error) {
        next(error);
        
    }
}
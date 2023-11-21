import bcryptjs from "bcryptjs";
import User from "../model/user.model.js";
import { errorHandler } from "../utils/error.js";
export const test = (req, res)=>{
    res.status(200).json({
        message : "Test user controller router is working"
    })
};

export const updateUser = async (req, res, next)=>{
    if(req.user.id !== req.params.id)
        return next(errorHandler(403, "You can update only your account"));
    try {
        if(req.body.password){
            req.body.password = bcryptjs.hashSync(req.body.password, 10);
        }

        const updateUser = await User.findByIdAndUpdate(
            req.params.id, 
            req.body, {
                $set : {
                    username : req.body.username,
                    email : req.body.email,
                    password : req.body.password,
                    avatar : req.body.avatar,
                },
            },
            {
                new : true
            }
        );
            
        const {password : pass, ...rest} = updateUser._doc;

        res.status(200).json(rest);

    } catch (error) {
        
        next(error);
    
    }
    
}

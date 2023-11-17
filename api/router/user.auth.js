// import express module
import express from "express";
// import auth module
import { signin, signup,googleAuth } from "../controller/auth.controller.js";

// create Auth module 
const authRouter = express.Router();

authRouter.post("/signup", signup );
authRouter.post("/signin", signin );
authRouter.post("/google", googleAuth)

//export auth module
export default authRouter;
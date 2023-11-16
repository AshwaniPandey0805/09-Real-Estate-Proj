// import express module
import express from "express";
// import auth module
import { signin, signup } from "../controller/auth.controller.js";

// create Auth module 
const authRouter = express.Router();

authRouter.post("/signup", signup );
authRouter.post("/signin", signin );

//export auth module
export default authRouter;
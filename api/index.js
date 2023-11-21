// import express module
import  express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
// import user router
import userRouter from "./router/user.router.js"
import authRouter from "./router/user.auth.js";
import cookieParser from "cookie-parser";
// configure dotenv

dotenv.config();

// connect to mongodb
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to mongodb");
}).catch((err)=>{
    console.log(err);
})



// create app object using express() method
const app = express();
app.use(express.json());
app.use(cookieParser());

// GET request
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

// adding middleware to handle error
app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal server error"

    return res.status(statusCode).json({
        success : false,
        statusCode,
        message
    });

});


app.listen(3000, ()=>{
    console.log("Server is started at port number 3000");

});

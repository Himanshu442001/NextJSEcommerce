import { User } from "../models/user.js";
import ErrorHandler from "../utils/Errorhandler.js";
import { asyncError } from "./error.js";

 
// export const isAuthenticated = (req,res,next) => {

//     const token = req.cookies["connect.sid"];
//     // console.log(token);
//     // const  {token} = req.cookies;


//     if(!token){
//       return next(new ErrorHandler("Not Logged In", 401));
//     }
//     next();
    
//  };



// Authorising only to admin user..

export const authorizedAdminOnly = asyncError(async(req,res,next)=>{

    const { id } = req.query;

    if (!id) return next(new ErrorHandler("Login Please..", 401));
  
    const user = await User.findById(id);
    if (!user) return next(new ErrorHandler("Invalid ID", 401));
    if (user.role !== "admin")
      return next(new ErrorHandler(" Only admin allowed", 403));
  
    next();






});



  
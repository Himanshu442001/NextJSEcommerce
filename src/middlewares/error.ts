import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../utils/Errorhandler.js";
import { ControllerType } from "../types/types.js";



export const errorMiddleware = (
    err: ErrorHandler,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    err.message ||= "Internal Server Error";
    err.statusCode ||= 500;
  
    if (err.name === "CastError") err.message = "Invalid ID";
  
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
};



// this is for not using try catch blocka again and again..
export const asyncError = (func:ControllerType)=>  (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(func(req, res, next)).catch(next);
};



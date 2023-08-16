import { Request, Response, NextFunction } from "express";

export const isVerified = (req:Request, res:Response, next: NextFunction)=>{
    const {verify} = req.body.userConfirmated

    if( !verify){
        res.status(401).json({
            msg: "The user was not verified correctly"
        })
        return
    }
    next()
}
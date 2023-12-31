import { NextFunction, Request, Response } from "express";
import jwt,{ JwtPayload } from "jsonwebtoken";
import User, { IsUser } from "../models/user";

const validateJWT = async ( req: Request, res: Response, next: NextFunction): Promise<void> => {
    const token = req.headers["x-token"] as string;

    if(!token){
        res.status(401).json({
            msg:"No se encontro token en la petición"
        })
        return;
    }

    try{
        const clueSecret = process.env.CLAVESECRET as string;
        const payload = jwt.verify(token, clueSecret) as JwtPayload

        const {id} = payload;

        const userConfirmated: IsUser | null = await User.findById(id)

        if(!userConfirmated){
            res.status(401).json({
                msg: "Token invalido"
            })
            return;
        }

        if(!userConfirmated){
            
            res.status(401).json({
                msg: "El usuario no esta logeado"
            })
            return;
        }

        req.body.userConfirmated = userConfirmated

        next()
    }catch(error){
        console.log("Failed to validate JWT")
        res.status(401).json({
            msg: "Failed to validate JWT"
        })
    }
}

export default validateJWT
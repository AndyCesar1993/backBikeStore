import { Request, Response } from "express";
import { ROLES } from "../helpers/constants";
import User, {IsUser} from "../models/user";
import bcryptjs from "bcryptjs"
import { sendEmail } from "../mailer/mailer";
import randomstring from "randomstring"
import generateJWT from "../helpers/generateJWT";

export const register = async (req:Request, res:Response):Promise<void>=>{
    const {name, dateOfBirth, username, email, password}:IsUser = req.body
    const user = new User({name, dateOfBirth, username, email, password})

    const salt = bcryptjs.genSaltSync()

    user.password = bcryptjs.hashSync(password, salt)

    const adminKey = req.headers["admin-key"]

    if (adminKey === process.env.KEYFORADMIN){
        user.rol = ROLES.admin
    }

    const newCode = randomstring.generate(6);

    user.code = newCode

    await user.save()

    await sendEmail(email, newCode)

    res.status(201).json({
        user
    })
}

export const verifyUser = async (req:Request, res:Response):Promise<void>=>{
    const {email, code}=req.body

    try{
        const user = await User.findOne({email})

        if(!user){
            res.status(400).json({
                msg: "No se encontró el email en la base de datos"
            })
            return
        }

        if(user.verify){
            res.status(400).json({
                msg: "El usuario ya se encuentra verificado"
            })
            return
        }

        if(user.code !== code){
            res.status(401).json({
                msg: "El código ingresado en incorrecto"
            })
            return
        }

        await User.findOneAndUpdate({email},{verify: true})

        res.status(200).json({
            msg: "Usuario verificado con éxito"
        })

    }catch(error){
        console.log(error)
        res.status(500).json({
            msg: "Server error"
        })
    }
}


export const loginUser = async (req:Request, res:Response)=>{
        const {username, password }: IsUser = req.body
    try{
        const user = await User.findOne({username})

        if(!user){
            res.status(400).json({
                msg:"error finding username in database"
            });
            return
        }

        const validatePassword = bcryptjs.compareSync(password, user.password)

        if(!validatePassword){
            res.status(400).json({
                msg: "Password is incorrect"
            });
            return
        }

        const token = await generateJWT(user.id)

        await User.findOneAndUpdate({username}, {logged: true})

        res.json({
            user,
            token
        })

    }catch(error){
        console.log(`error logging :${error}`)
        res.status(500).json({
            msg: "Server error"
        })
    }

}

export const loggedOut = async ( req: Request, res: Response) =>{
    const userName = req.headers["userName"]

    try{

        await User.findOneAndUpdate({userName}, {logged: false}) 
        console.log("logged out successfully")
        res.status(201).json({
            msg: "logged out successfully"
        })
        
    }catch(error){
        console.log(`error logged out:${error}`)
        res.status(500).json({
            msg:"Server error"
        })
    }

}
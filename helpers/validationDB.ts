import { sendEmail } from "../mailer/mailer";
import User, { IsUser } from "../models/user";

export const existEmail = async ( email:string): Promise<void>=>{
    const existMail: IsUser | null =await User.findOne({email})

    if(existMail && existMail.verify){
        throw new Error(`El correo '${email}' ya está registrado`)
    }
    if(existMail && !existMail.verify){
        await sendEmail(email, existMail.code as string)
        throw new Error(`El usuario ya está registrado. Se envió nuevamente código de verificación a ${email}`)
    }
}

export const existUsername = async ( username:string): Promise<void>=>{
    const existUserName: IsUser | null =await User.findOne({username})

    if(existUserName && existUserName.verify){
        throw new Error(`El nombre de usuario '${username}' ya está registrado`)
    }
}


import { Model, Schema, model } from "mongoose";
import { ROLES } from "../helpers/constants";

export interface IsUser{
    name: string;
    dateOfBirth: number;
    username: string;
    email:string;
    password: string;
    rol?: string;
    code?:string; 
    verify?:boolean;
    logged:boolean;
}

const UserSchema = new Schema<IsUser>({
    name:{
        type: String,
        required: [true, "El nombre es obligatorio"]
    },
    dateOfBirth:{
        type: Number,
        required: [true, "La fecha de nacimiento es obligatorio"]
    },
    username:{
        type: String,
        required: [true, "El nombre de usuario es obligatorio"],
        unique: true
    },
    email:{
        type: String,
        required: [true, "El email es obligatorio"],
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    rol:{
        type: String,
        default: ROLES.user
    },
    code:{
        type: String
    },
    verify:{
        type: Boolean,
        default: false
    },
    logged:{
        type: Boolean,
    },
})

UserSchema.methods.toJSON = function(){
    const { __v, password, _id, code, ...user} = this.toObject()
    return user
}

const User: Model<IsUser>= model<IsUser>('User', UserSchema)

export default User
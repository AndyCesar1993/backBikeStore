import mongoose from "mongoose";

export const conectBD = async():Promise<void>=>{
    try{
        const dbUrl = process.env.DB_URL;
        if(!dbUrl){
            throw new Error("The URL is not correctly defined in the .env")
        }
        await mongoose.connect(dbUrl)
        console.log('Database Online!!')
    }catch(error){
        console.error(error)
        throw new Error('Error connecting to the database')
    }
}
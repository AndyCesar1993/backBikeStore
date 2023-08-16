import express,{ Express } from "express";
import cors from "cors"
import { conectBD } from "../database/config";
import authRoutes from "../routes/userRoutes"
import orderRoutes from "../routes/orders"

export class Server{
    app: Express;
    port: string | number | undefined 
    authPath: string;
    orderPath: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT
        this.authPath = "/auth"
        this.orderPath = "/orders"

        this.connectDB();

        this.middlewares();
        
        this.routes()

    }

    async connectDB():Promise<void>{
        await conectBD()
    }

    middlewares():void{
        this.app.use(cors())
        this.app.use(express.json())
    }

    routes():void{
        this.app.use(this.authPath, authRoutes)
        this.app.use(this.orderPath, orderRoutes )
    }

    listen():void{
        this.app.listen(this.port, ()=>{
            console.log(`Running on port ${this.port}`)
        })
    }
}
import { Request, Response } from "express";
import Order, {IsOrder} from "../models/order";
import { ObjectId } from "mongoose";

export const getOrders = async ( req: Request, res: Response): Promise<void> => {
    try{
        const userID: ObjectId = req.body.userConfirmated._id;

        const request = { user: userID}

        const orders = await Order.find(request)

        res.json({
            data: [...orders]
        })
    }catch(error){
        console.error(`error orders:${error}`)
    }
}

export const createOrders = async ( req: Request, res: Response): Promise<void> => {
    const userID: ObjectId = req.body.userConfirmated._id;

    const orderData: IsOrder = req.body;

    const data = {
        ...orderData,
        user: userID,
        createdAt: new Date(),
        status: "En preparación"
    }

    const order = new Order(data);
    
    await order.save()

    res.status(201).json({
        order
    })
}
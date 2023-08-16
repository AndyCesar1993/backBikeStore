import { Model, Schema, Types, model } from "mongoose";

interface IsShippingDetails{
    name: string;
    cellphone: number;
    location: string;
    adress: string;
    cp: number;
}

interface IsItem{
    desc: string;
    id: number;
    price: number;
    quantity: number;
    tittle: string;
}

export interface IsOrder{
    createdAt: Date;
    user: Types.ObjectId;
    price: Number;
    shipingCost: number;
    items: IsItem[];
    shippingDetails: IsShippingDetails[];
    status: string;
    total: number;
}

const OrderSchema =  new Schema<IsOrder>({
    createdAt: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    shipingCost: {
        type: Number
    },
    items: {
        type: [{
            desc: {
                type: String,
                required: true
            },
            id: {
                type: Number,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            tittle: {
                type: String,
                required: true
            }
        }],
        required: true
    },
    shippingDetails: {
        name: {
            type: String,
            required: true
        },
        cellphone: {
            type: Number,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        adress: {
            type: String,
            required: true
        },
        cp: {
            type: Number,
            required: true
        },
    },
    status: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true
    }
})

const Order: Model<IsOrder> = model <IsOrder>("Order", OrderSchema)

export default Order
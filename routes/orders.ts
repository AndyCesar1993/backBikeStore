import { Router } from "express";
import { createOrders, getOrders } from "../controllers/orders";
import { collectErrors } from "../middlewares/collectErrors";
import validateJWT from "../helpers/validateJWT";
import { isVerified } from "../middlewares/validateVerify";
import { check } from "express-validator";

const router = Router()

router.get("/", [validateJWT, collectErrors], getOrders)

router.post("/", [validateJWT, isVerified,
    check("price", "The price is obligatory").not().isEmpty(),
    check("shipingCost", "The shipingCost is obligatory").not().isEmpty(),
    check("total", "The total is obligatory").not().isEmpty(),
    check("shippingDetails", "The shippingDetails is obligatory").not().isEmpty(),
    check("items", "The array of products is obligatory").not().isEmpty(),
    collectErrors,
],createOrders)

export default router
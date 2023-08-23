import { Router } from "express";
import { createOrders, getOrders } from "../controllers/orders";
import { collectErrors } from "../middlewares/collectErrors";
import validateJWT from "../helpers/validateJWT";
import { isVerified } from "../middlewares/validateVerify";
import { check } from "express-validator";

const router = Router()

router.get("/", [validateJWT, collectErrors], getOrders)

router.post("/", [validateJWT, isVerified,
    check("price", "El precio es requerido").not().isEmpty(),
    check("shipingCost", "El valor de envio es obligatorio").not().isEmpty(),
    check("total", "El costo total es requerido").not().isEmpty(),
    check("shippingDetails", "Falta detalles de envío").not().isEmpty(),
    check("items", "No se encontraron productos en el carrito").not().isEmpty(),
    collectErrors,
],createOrders)

export default router
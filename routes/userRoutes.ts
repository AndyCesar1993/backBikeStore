import { Router } from "express";
import { check } from "express-validator";
import { collectErrors } from "../middlewares/collectErrors";
import { register, verifyUser, loginUser, loggedOut } from "../controllers/auth";
import { existEmail, existUsername } from "../helpers/validationDB";

const router = Router()

router.post('/register',[
    check("name","El nombre es obligatorio").not().isEmpty(),
    check("dateOfBirth","La fecha de nacimiento es obligatoria").not().isEmpty(),
    check("username","El nombre de usuario es obligatorio").not().isEmpty(),
    check("email","El email es obligatorio").isEmail(),
    check("password","La contraseña debe contener minimo 6 caracteres ").isLength({min:6}),
    //validacion custom
    check("email").custom(existEmail),
    check("username").custom(existUsername),
    //middleware custom
    collectErrors
], register)

router.patch('/verify',[
    check("email","El email es obligatorio").isEmail(),
    check("code","El código es obligatorio").not().isEmpty(),
    collectErrors
],
verifyUser
)

router.post("/login",
[
    check("username","El nombre de usuario es obligatorio").not().isEmpty(),
    check("password","La contraseña debe contener minimo 6 caracteres ").isLength({min:6}),
    collectErrors,
],
loginUser
)

router.patch("/", loggedOut)

export default router
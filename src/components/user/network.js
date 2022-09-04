//Solo rutas del usuario
import { Router } from "express"
import * as Controller from "./controller"
//CUANDO EXPORTAMOS EXPORT=> si un archivo tiene mas de dos funciones va export
import { findAll } from "./controller";
//CUANDO EXPORT DEFAULT
//import findAll  from "./controller";
const userRouter = Router();

userRouter.route("/").get(Controller.findAll)
userRouter.route("/:id").get(Controller.findOne)
userRouter.route("/").post(Controller.create)
userRouter.route("/:id").put(Controller.update)
userRouter.route("/:id").delete(Controller.remove)

export default userRouter
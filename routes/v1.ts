import {} from "typeorm";
import providerController from "../controllers/provider.controller";
import * as express from "express";
const router = express.Router();

/** Provider **/
router.get("/providers", providerController.getProviders);
router.get("/provider/:id", providerController.getSingleProvider);
router.post("/addProvider", providerController.newProvider);
router.post("/providerLogin", providerController.loginProvider);
router.put("/updateProvider/:id", providerController.updateProvider);
router.delete("/removeProvider/:id", providerController.deleteProvider);

/** Category **/
/** Sub Category **/
/** Admin **/
/** Client **/
/** Order **/
/** Service **/
export default router;

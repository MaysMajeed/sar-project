import {} from "typeorm";
import providerController from "../controllers/provider.controller";
import * as express from "express";
const router = express.Router();

/** Provider **/
router.get("/providers", providerController.getProviders);
router.get("/provider/:id", providerController.getSingleProvider);
router.post("/provider", providerController.newProvider);
// router.post("/providerLogin", providerController.loginProvider);
// router.put("/provider/:id", providerController.updateProvider);
// router.delete("/provider/:id", providerController.deleteProvider);

/** Category **/
router.get("/allCategories");
router.get("/singleCategory");
router.post("/addCategory");
router.put("/updateCategory");
router.delete("/removeCategory");

/** Sub Category **/
/** Admin **/
/** Client **/
/** Order **/
/** Service **/
export default router;

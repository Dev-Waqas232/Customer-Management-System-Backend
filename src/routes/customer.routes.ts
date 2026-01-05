import { Router } from "express";
import { authenticate } from "../middlewares/authenticate";
import { CustomerController } from "../controllers/customer.controller";

const router = Router();

router.use(authenticate);

router.get("/", CustomerController.getCustomers);

export { router as customerRoute };

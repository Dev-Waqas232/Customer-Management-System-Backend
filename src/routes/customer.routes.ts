import { Router } from "express";
import { authenticate } from "../middlewares/authenticate";
import { CustomerController } from "../controllers/customer.controller";

const router = Router();

router.use(authenticate);

router.get("/", CustomerController.getCustomers);

router.post("/", CustomerController.createCustomer);

export { router as customerRoute };

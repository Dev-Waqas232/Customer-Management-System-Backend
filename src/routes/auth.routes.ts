import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";

const router = Router();

router.post("/auth/register", AuthController.register);

router.post("/auth/login", AuthController.login);

router.post("/auth/logout", AuthController.logout);

router.get("/auth/profile", AuthController.getProfile);

export { router as authRoute };

import { type NextFunction, type Request, type Response } from "express";
import { AuthService } from "../services/auth.service";

export class AuthController {
  static register(req: Request, res: Response, next: NextFunction) {
    try {
      const user = AuthService.register();
    } catch (error) {
      next(error);
    }
  }

  static login(req: Request, res: Response, next: NextFunction) {}

  static logout(req: Request, res: Response, next: NextFunction) {}

  static getProfile(req: Request, res: Response, next: NextFunction) {}
}

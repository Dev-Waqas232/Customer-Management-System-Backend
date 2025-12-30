import { type NextFunction, type Request, type Response } from "express";
import { AppError } from "../middlewares/error-handler";

export class AuthController {
  static register(req: Request, res: Response, next: NextFunction) {
    try {
      throw new AppError("Testing middleware");
    } catch (error) {
      next(error);
    }
  }

  static login(req: Request, res: Response, next: NextFunction) {}

  static logout(req: Request, res: Response, next: NextFunction) {}

  static getProfile(req: Request, res: Response, next: NextFunction) {}
}

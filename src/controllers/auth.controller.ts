import { type NextFunction, type Request, type Response } from "express";
import { AuthService } from "../services/auth.service";
import { ApiResponse } from "../utils/api-response";

export class AuthController {
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await AuthService.register(req.body);
      return ApiResponse.created(res, user, "Admin created!");
    } catch (error) {
      next(error);
    }
  }

  static login(req: Request, res: Response, next: NextFunction) {}

  static logout(req: Request, res: Response, next: NextFunction) {}

  static getProfile(req: Request, res: Response, next: NextFunction) {}
}

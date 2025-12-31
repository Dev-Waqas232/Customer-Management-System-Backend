import { type NextFunction, type Request, type Response } from "express";
import { AuthService } from "../services/auth.service";
import { ApiResponse } from "../utils/api-response";
import { AuthRequest } from "../types";

export class AuthController {
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await AuthService.register(req.body);
      return ApiResponse.created(res, user, "Admin created!");
    } catch (error) {
      next(error);
    }
  }

  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const token = await AuthService.login(req.body);
      return ApiResponse.success(res, token, "Login Successful");
    } catch (error) {
      next(error);
    }
  }

  static async getProfile(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const user = await AuthService.getProfile(req);
      return ApiResponse.success(res, user, "Fetched User");
    } catch (error) {
      next(error);
    }
  }
}

import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";

import { AppError } from "./error-handler";
import { decodeToken } from "../utils/jwt";
import { AuthJwtPayload, AuthRequest } from "../types";
import { Admin } from "../models/admin.model";

export async function authenticate(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) throw new AppError("Token not found", 401);

    const decode: AuthJwtPayload = decodeToken(token);
    const userId = decode.id;

    const user = await Admin.findById(userId);
    if (!user) throw new AppError("Invalid token", 401);

    req.user = user;
    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError)
      throw new AppError("Token is expired", 401);
    next(error);
  }
}

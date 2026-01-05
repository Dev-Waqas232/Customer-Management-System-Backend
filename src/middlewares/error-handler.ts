import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { ApiResponse } from "../utils/api-response";

export class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;

    Object.setPrototypeOf(this, new.target.prototype);
  }
}

// Need all 4 parameters otherwise express won't recognize it as error handler middleware
export function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof ZodError) {
    return ApiResponse.error(res, err.message, 400);
  }

  if (err instanceof AppError) {
    return ApiResponse.error(res, err.message, err.statusCode);
  }

  console.log(err);
  return ApiResponse.error(res, "Something went wrong", 500);
}

import { type Response } from "express";

export class ApiResponse {
  static success<T>(
    res: Response,
    data: T,
    message: string = "Success",
    statusCode: number = 200
  ) {
    return res.status(statusCode).json({ message, data });
  }

  static created<T>(res: Response, data: T, message: string = "Success") {
    return this.success(res, data, message, 201);
  }

  static noContent<T>(res: Response) {
    return res.status(204).send();
  }

  static error(res: Response, message: string = "Error", statusCode: number) {
    return res.status(statusCode).json({ message });
  }
}

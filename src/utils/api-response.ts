import { Response } from "express";

export class ApiResponse {
  static success<T>(res: Response, data: T, message: string = "Success") {
    return res.status(200).json({ message, data });
  }

  static created<T>(res: Response, data: T, message: string = "Success") {
    return res.status(201).json({ message, data });
  }

  static noContent<T>(res: Response) {
    return res.status(204).send();
  }
}

import { NextFunction, Request, Response } from "express";
import { CustomerService } from "../services/customer.service";
import { ApiResponse } from "../utils/api-response";

export class CustomerController {
  static async getCustomers(req: Request, res: Response, next: NextFunction) {
    try {
      const customer = await CustomerService.getCustomers();
      return ApiResponse.success(res, customer, "Customer Fetched!");
    } catch (error) {
      next(error);
    }
  }

  static async createCustomer(req: Request, res: Response, next: NextFunction) {
    try {
      const customer = await CustomerService.createCustomer(req.body);
      return ApiResponse.created(res, customer, "Customer Created!");
    } catch (error) {
      next(error);
    }
  }
}

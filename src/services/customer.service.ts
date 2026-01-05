import { Customer } from "../models/customer.model";

export class CustomerService {
  static async getCustomers() {
    const today = new Date();
    const currentDay = today.getDate();

    await Customer.updateMany(
      {
        payment_status: "done",
        $expr: {
          $lt: [{ $dayOfMonth: "$first_billing_date" }, currentDay],
        },
      },
      {
        $set: { payment_status: "pending" },
      }
    );

    return await Customer.find();
  }
}

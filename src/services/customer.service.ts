import { AppError } from "../middlewares/error-handler";

export class CustomerService {
  static async getCustomers() {
    // const today = new Date();
    // const currentDay = today.getDate();
    // await Customer.updateMany(
    //   {
    //     payment_status: "done",
    //     $expr: {
    //       $lt: [{ $dayOfMonth: "$first_billing_date" }, currentDay],
    //     },
    //   },
    //   {
    //     $set: { payment_status: "pending" },
    //   }
    // );
    // return await Customer.find();
  }

  static async createCustomer(data: any) {
    // const customer = await Customer.findOne({
    //   phone_number: data.phone_number,
    // });
    // if (customer)
    //   throw new AppError("Customer with this phone number already exists", 409);
    // const newCustomer = new Customer({
    //   ...data,
    //   first_billing_date: data.first_billing_date,
    //   last_payment_date:
    //     data?.last_payment_date && new Date(data.last_payment_date),
    // });
    // return await newCustomer.save();
  }
}

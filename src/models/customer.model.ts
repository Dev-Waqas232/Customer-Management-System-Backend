import { model, Schema } from "mongoose";

const CustomerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
      unique: true,
    },
    payment_status: {
      type: String,
      enum: ["pending", "done"],
      required: true,
    },
    payment: {
      type: Number,
      required: true,
    },
    first_billing_date: {
      type: Date,
      required: true,
    },
    last_payment_date: {
      type: Date || null,
      default: null,
    },
  },
  { timestamps: true }
);

export const Customer = model("Customer", CustomerSchema);

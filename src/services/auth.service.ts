import bcrypt from "bcrypt";

import { AppError } from "../middlewares/error-handler";
import { Admin } from "../models/admin.model";

export class AuthService {
  static async register(data: {
    name: string;
    email: string;
    password: string;
    role: string;
  }) {
    const user = await Admin.findOne({ email: data.email });

    if (user) throw new AppError("Email already exists");

    const password = await bcrypt.hash(data.password, 12);

    const newUser = new Admin({
      name: data.name,
      email: data.email,
      role: data.role,
      password,
    });

    return await newUser.save();
  }
}

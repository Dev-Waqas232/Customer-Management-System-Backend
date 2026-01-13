import bcrypt from "bcrypt";

import { AppError } from "../middlewares/error-handler";
import { generateToken } from "../utils/jwt";
import { Request } from "express";

// TODO: Need to convert everything into prisma

export class AuthService {
  static async register(data: {
    name: string;
    email: string;
    password: string;
    role: string;
  }) {
    // const user = await Admin.findOne({ email: data.email });

    // if (user) throw new AppError("Email already exists", 409);

    const password = await bcrypt.hash(data.password, 12);

    // const newUser = new Admin({
    //   name: data.name,
    //   email: data.email,
    //   role: data.role,
    //   password,
    // });

    // return await newUser.save();
  }

  static async login(data: { email: string; password: string }) {
    if (!data.email || !data.password)
      throw new AppError("Please enter required fields", 400);

    // const user = await Admin.findOne({ email: data.email });

    // if (!user) throw new AppError("Invalid Credentials", 401);

    // const passwordMatch = await bcrypt.compare(data.password, user.password);

    // if (!passwordMatch) throw new AppError("Invalid Credentials", 401);

    // const token = generateToken(user._id.toString());

    // return token;
  }

  static async getProfile(req: Request) {
    // const id = req.user?._id;
    // const user = await Admin.findById(id).select("-password -role");
    // if (!user) throw new AppError("User doesn't found", 404);
    // return user;
  }
}

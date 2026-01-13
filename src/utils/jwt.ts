import jwt from "jsonwebtoken";
// import { AuthJwtPayload } from "../types";

export function generateToken(id: string) {
  const token = jwt.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: "1d",
  });

  return token;
}

export function decodeToken(token: string) {
  const decode = jwt.verify(token, process.env.JWT_SECRET as string);

  return decode;
}

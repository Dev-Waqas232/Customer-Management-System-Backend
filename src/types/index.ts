import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";
import { Admin } from "../models/admin.model";
import { HydratedDocument, InferSchemaType } from "mongoose";

export type AdminDocument = HydratedDocument<
  InferSchemaType<typeof Admin.schema>
>;

export interface AuthJwtPayload extends JwtPayload {
  _id: string;
}

export interface AuthRequest extends Request {
  user?: AdminDocument;
}

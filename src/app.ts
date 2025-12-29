import express, { Request, Response, type Express } from "express";
import { config } from "dotenv";
import cors from "cors";
import { ApiResponse } from "./utils/api-response";

config();

const app: Express = express();
const port = process.env.PORT ?? 5000;

app.use(cors());

app.use("/health", (req: Request, res: Response) => {
  return ApiResponse.success(res, null, "Hello from Server");
});

app.listen(port, () => {});

import express, { Request, Response, type Express } from "express";
import { config } from "dotenv";
import cors from "cors";
import { ApiResponse } from "./utils/api-response";
import { connectDB } from "./config/db";

config();
connectDB();

const app: Express = express();

app.use(cors());

app.use("/health", (req: Request, res: Response) => {
  return ApiResponse.success(res, null, "Hello from Server");
});

export default app;

if (process.env.NODE_ENV !== "production") {
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`Server is running`);
  });
}

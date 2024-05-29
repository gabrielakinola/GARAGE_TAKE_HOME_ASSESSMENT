import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { connectDB } from "./config/db";
import blogRoutes from "./routes/blog.route";

const app = express();
connectDB();

const port = process.env.PORT | 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/posts", blogRoutes);
app.all("*", (req: Request, res: Response) => {
  return res.status(404).json({ message: `${req.originalUrl} not found` });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

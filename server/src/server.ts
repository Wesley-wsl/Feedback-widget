import "express-async-errors";
import express from "express";
import { feedbackRouter } from "./api/routes/feedbacks.routes";
import cors from "cors";
import { config } from "dotenv";
import { errorHandler } from "./api/middlewares/errorHandler";

config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1/feedbacks", feedbackRouter);
app.use(errorHandler);

app.listen(process.env.PORT || 3333, () => console.log("Server is running."));

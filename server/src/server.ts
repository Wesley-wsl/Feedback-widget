import express from "express";
import { feedbackRouter } from "./api/routes/feedbacks.routes";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1/feedbacks", feedbackRouter);

app.listen(3333, () => console.log("Server is running."));

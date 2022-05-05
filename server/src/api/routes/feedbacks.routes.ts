import express from "express";
import { createFeedbackController } from "../useCases/CreateFeedback";

const routes = express.Router();

routes.post("/", async (request, response) => {
    return createFeedbackController.handle(request, response);
});

export { routes as feedbackRouter };

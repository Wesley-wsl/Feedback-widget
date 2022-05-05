import { Request, Response } from "express";
import { CreateFeedbackUseCase } from "./CreateFeedbackUseCase";

export class CreateFeedbackController {
    constructor(private createFeedbackUseCase: CreateFeedbackUseCase) {}

    async handle(request: Request, response: Response) {
        const { type, comment, screenshot } = request.body;

        await this.createFeedbackUseCase.execute({
            type,
            comment,
            screenshot,
        });

        return response.status(204).end();
    }
}

import { NodemailerProvider } from "../../providers/implementations/NodemailerProvider";
import { PrismaFeedbacksRepository } from "../../repositories/prisma/Prisma-feedbacks-repository";
import { CreateFeedbackController } from "./CreateFeedbackController";
import { CreateFeedbackUseCase } from "./CreateFeedbackUseCase";

const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
const nodemailerProvider = new NodemailerProvider();
const createFeedbackUseCase = new CreateFeedbackUseCase(
    prismaFeedbacksRepository,
    nodemailerProvider
);
const createFeedbackController = new CreateFeedbackController(
    createFeedbackUseCase
);

export { createFeedbackController };

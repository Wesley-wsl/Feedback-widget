import { CreateFeedbackUseCase } from "./CreateFeedbackUseCase";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

describe("#CreateFeedback", () => {
    it("Should be able to create a feedback", async () => {
        const sut = new CreateFeedbackUseCase(
            { create: createFeedbackSpy },
            { sendMail: sendMailSpy }
        );

        await expect(
            sut.execute({
                comment: "Comment",
                type: "type",
                screenshot: "data:image/png;base64243099243984290824",
            })
        ).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(createFeedbackSpy).toHaveBeenCalled();
    });

    it("Shouldn't be able to a feeback if don't have a comment in feedback", async () => {
        const sut = new CreateFeedbackUseCase(
            { create: async () => {} },
            { sendMail: async () => {} }
        );

        await expect(
            sut.execute({
                comment: "",
                type: "type",
                screenshot: "data:image/png;base64243099243984290824",
            })
        ).rejects.toEqual(new Error("Comment is required"));
    });

    it("Shouldn't be able to a feeback if don't have a type in feedback", async () => {
        const sut = new CreateFeedbackUseCase(
            { create: async () => {} },
            { sendMail: async () => {} }
        );

        const response = sut.execute({
            type: "",
            comment: "A comment",
            screenshot: "data:image/png;base64243099243984290824",
        });

        await expect(response).rejects.toEqual(new Error("Type is required"));
    });

    it("Shouldn't be able to a feeback if feedback screenshot is invalid", async () => {
        const sut = new CreateFeedbackUseCase(
            { create: async () => {} },
            { sendMail: async () => {} }
        );

        await expect(
            sut.execute({
                comment: "Some comment",
                type: "type",
                screenshot: "dat290824",
            })
        ).rejects.toEqual(new Error("Invalid screenshot format."));
    });
});

import { transport } from "../../../config/smtp";
import {
    INodemailerProvider,
    ISendNodemailerData,
} from "../INodemailerProvider";

export class NodemailerProvider implements INodemailerProvider {
    async sendMail({ subject, body }: ISendNodemailerData) {
        await transport.sendMail({
            from: "Equipe Feedback Widget <noreply@feedget.com>",
            to: "Wesley <wesley@gmail.com>",
            subject: subject,
            html: body,
        });
    }
}

export interface ISendNodemailerData {
    subject: string;
    body: string;
}

export interface INodemailerProvider {
    sendMail: (data: ISendNodemailerData) => Promise<void>;
}

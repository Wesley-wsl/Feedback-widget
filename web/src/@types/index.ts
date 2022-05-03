import { feedbackTypes } from "../utils/constants";

export interface IScreenshotButton {
    onScreenshotTook: (screenshot: string | null) => void;
    screenshot: null | string;
}

export type FeedbackType = keyof typeof feedbackTypes;

export interface IFeedbackTypeStep {
    onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export interface IFeedbackSuccessStep {
    onFeedbackRestartRequested: () => void;
}

export interface IFeedbackContentStep {
    feedbackType: FeedbackType;
    onFeedbackRestartRequested: () => void;
    onFeedbackSent: () => void;
}

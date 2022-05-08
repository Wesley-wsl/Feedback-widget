import { Dispatch, SetStateAction } from "react";
import { TouchableOpacityProps } from "react-native";
import { feedbackTypes } from "../utils/feedbackTypes";

export type FeedbackType = keyof typeof feedbackTypes;

export interface ISuccess {
    onSendAnotherFeedback: () => void;
}

export interface IScreenshotButton {
    screenshot: string | null;
    onTakeShot: () => void;
    onRemoveShot: () => void;
}

export interface IOptions {
    setFeedbackType: Dispatch<SetStateAction<FeedbackType | null>>;
}

export interface IOption extends TouchableOpacityProps {
    title: string;
    image: string;
}

export interface IForm {
    feedbackType: FeedbackType;
    onFeedbackCanceled: () => void;
    onFeedbackSent: () => void;
}

export interface IButton extends TouchableOpacityProps {
    isLoading: boolean;
}

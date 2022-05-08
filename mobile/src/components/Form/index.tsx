import { ArrowLeft } from "phosphor-react-native";
import React, { useState } from "react";
import { View, TextInput, Image, Text, TouchableOpacity } from "react-native";
import { theme } from "../../theme";
import { captureScreen } from "react-native-view-shot";
import * as FileSystem from "expo-file-system";

import { ScreenshotButton } from "../../components/ScreenshotButton";

import { styles } from "./styles";
import { Button } from "../Button";
import { api } from "../../services/api";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { FeedbackType, IForm } from "../../@types";

export function Form({
    feedbackType,
    onFeedbackCanceled,
    onFeedbackSent,
}: IForm) {
    const [screenshot, setScreenshot] = useState<string | null>(null);
    const [comment, setComment] = useState("");
    const [isSendingFeedback, setIsSendingFeedback] = useState(false);
    const feedbackTypeInfo = feedbackTypes[feedbackType as FeedbackType];
    const handleScreenshotRemove = () => setScreenshot(null);

    function handleScreenshot() {
        captureScreen({
            format: "jpg",
            quality: 0.8,
        })
            .then((uri: string) => setScreenshot(uri))
            .catch((error: Error) => console.log(error));
    }

    async function handleSendFeedback() {
        if (isSendingFeedback) return;
        setIsSendingFeedback(true);

        const screenshotBase64 =
            screenshot &&
            (await FileSystem.readAsStringAsync(screenshot, {
                encoding: "base64",
            }));

        try {
            await api.post("/api/v1/feedbacks", {
                type: feedbackType,
                screenshot: `data:image/png;base64, ${screenshotBase64}`,
                comment,
            });
            onFeedbackSent();
        } catch (error) {
            console.log(error);
        } finally {
            setIsSendingFeedback(false);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={onFeedbackCanceled}>
                    <ArrowLeft
                        weight="bold"
                        size={24}
                        color={theme.colors.text_secondary}
                    />
                </TouchableOpacity>
                <View style={styles.titleContainer}>
                    <Image
                        source={feedbackTypeInfo.image}
                        style={styles.image}
                    />
                    <Text style={styles.titleText}>
                        {feedbackTypeInfo.title}
                    </Text>
                </View>
            </View>

            <TextInput
                multiline
                style={styles.input}
                placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
                placeholderTextColor={theme.colors.text_secondary}
                autoCorrect={false}
                onChangeText={setComment}
            />

            <View style={styles.footer}>
                <ScreenshotButton
                    onTakeShot={handleScreenshot}
                    onRemoveShot={handleScreenshotRemove}
                    screenshot={screenshot}
                />
                <Button
                    onPress={handleSendFeedback}
                    isLoading={isSendingFeedback}
                />
            </View>
        </View>
    );
}

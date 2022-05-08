import React, { useRef, useState } from "react";
import { TouchableOpacity } from "react-native";
import { ChatTeardropDots } from "phosphor-react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

import { styles } from "./styles";
import { theme } from "../../theme";
import { Options } from "../Options";
import { Form } from "../Form";

import { Success } from "../Success";
import { FeedbackType } from "../../@types";

function Widget() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);

    const bottomSheetRef = useRef<BottomSheet>(null);
    const handleOpen = () => bottomSheetRef.current?.expand();
    const handleFeedbackSent = () => setFeedbackSent(true);

    function handleRestartFeedback() {
        setFeedbackType(null);
        setFeedbackSent(false);
    }

    return (
        <>
            <TouchableOpacity style={styles.button} onPress={handleOpen}>
                <ChatTeardropDots
                    size={24}
                    color={theme.colors.text_on_brand_color}
                />
            </TouchableOpacity>
            <BottomSheet
                ref={bottomSheetRef}
                snapPoints={[1, 280]}
                backgroundStyle={styles.modal}
                handleIndicatorStyle={styles.indicator}
            >
                {feedbackSent ? (
                    <Success onSendAnotherFeedback={handleRestartFeedback} />
                ) : (
                    <>
                        {feedbackType ? (
                            <Form
                                feedbackType={feedbackType}
                                onFeedbackCanceled={handleRestartFeedback}
                                onFeedbackSent={handleFeedbackSent}
                            />
                        ) : (
                            <Options setFeedbackType={setFeedbackType} />
                        )}
                    </>
                )}
            </BottomSheet>
        </>
    );
}

export default gestureHandlerRootHOC(Widget) as React.FC;

import React from "react";
import { Text, View } from "react-native";
import { Copyright } from "../Copyright";

import { feedbackTypes } from "../../utils/feedbackTypes";
import { styles } from "./styles";
import { Option } from "../Option";
import { FeedbackType, IOptions } from "../../@types";

export function Options({ setFeedbackType }: IOptions) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Deixe seu feedback</Text>

            <View style={styles.options}>
                {Object.entries(feedbackTypes).map(([key, value]) => (
                    <Option
                        key={key}
                        title={value.title}
                        image={key}
                        onPress={() => setFeedbackType(key as FeedbackType)}
                    />
                ))}
            </View>
            <Copyright />
        </View>
    );
}

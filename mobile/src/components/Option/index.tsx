import React from "react";
import {
    TouchableOpacity,
    Image,
    Text,
} from "react-native";
import { FeedbackType, IOption } from "../../@types";
import { feedbackTypes } from "../../utils/feedbackTypes";

import { styles } from "./styles";

export function Option({ title, image, ...rest }: IOption) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <Image
                source={feedbackTypes[image as FeedbackType].image}
                style={styles.image}
            />
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}

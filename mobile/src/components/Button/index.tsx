import React from "react";
import {
    TouchableOpacity,
    ActivityIndicator,
    Text,
} from "react-native";
import { IButton } from "../../@types";
import { theme } from "../../theme";

import { styles } from "./styles";

export function Button({ isLoading, ...rest }: IButton) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            {isLoading ? (
                <ActivityIndicator color={theme.colors.text_on_brand_color} />
            ) : (
                <Text style={styles.title}>Enviar Feedback</Text>
            )}
        </TouchableOpacity>
    );
}

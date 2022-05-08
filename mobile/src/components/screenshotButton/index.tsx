import { Camera, Trash } from "phosphor-react-native";
import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { IScreenshotButton } from "../../@types";
import { theme } from "../../theme";

import { styles } from "./styles";

export function ScreenshotButton({
    screenshot,
    onTakeShot,
    onRemoveShot,
}: IScreenshotButton) {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={screenshot ? onRemoveShot : onTakeShot}
        >
            {screenshot ? (
                <View>
                    <Image style={styles.image} source={{ uri: screenshot }} />
                    <Trash
                        weight="fill"
                        size={22}
                        color={theme.colors.text_secondary}
                        style={styles.removeIcon}
                    />
                </View>
            ) : (
                <Camera
                    weight="bold"
                    size={24}
                    color={theme.colors.text_secondary}
                />
            )}
        </TouchableOpacity>
    );
}

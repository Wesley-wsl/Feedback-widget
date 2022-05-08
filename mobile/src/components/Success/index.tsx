import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import successImg from "../../assets/success.png";
import { ISuccess } from "../../@types";
import { Copyright } from "../Copyright";
import { styles } from "./styles";

export function Success({ onSendAnotherFeedback }: ISuccess) {
    return (
        <View style={styles.container}>
            <Image source={successImg} style={styles.image} />

            <Text style={styles.title}>Agredecemos o feedback</Text>
            <TouchableOpacity
                onPress={onSendAnotherFeedback}
                style={styles.button}
            >
                <Text style={styles.buttonTitle}>Quero enviar outro</Text>
            </TouchableOpacity>

            <Copyright />
        </View>
    );
}

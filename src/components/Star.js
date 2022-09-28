import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

import star from '../assets/estrela.png';
import grayStar from '../assets/estrelaCinza.png';

export default function Star({ onPress, desabilitada=true, preenchida, grande=false }) {

    const styles = functionStyles(grande);
    const getImage = () => {
        if (preenchida) {
            return star;
        }
        return grayStar;
    }

    return <TouchableOpacity
        onPress={ onPress }
        disabled={desabilitada}
    >
        <Image source={getImage()} style={styles.star} />
    </TouchableOpacity>
}

const functionStyles = (grande) => StyleSheet.create({
    star: {
        width: grande ? 36 : 12,
        height: grande ? 36 : 12,
        marginRight: 2,
    }
});
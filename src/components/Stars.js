import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Star from "./Star";

export default function Stars({
    quantidade: quantidadeAntiga,
    editavel = false,
    grande = false,
}) {

    const [quantidade, setQuantidade] = useState(quantidadeAntiga);

    const RenderStars = () => {
        const starList = []
        for (let x = 0; x < 5; x++) {
            starList.push(
                <Star 
                    onPress={() => setQuantidade(x+1)}
                    desabilitada={!editavel}
                    preenchida={x < quantidade}
                    grande={grande}
                />
            );
        }

        return starList;
    }

    return <View style={styles.view}>
        <RenderStars />
    </View>
}

const styles = StyleSheet.create({
    view: {
        flexDirection: "row",
    }
});
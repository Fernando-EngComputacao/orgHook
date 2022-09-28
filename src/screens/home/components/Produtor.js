import React, { useMemo, useReducer } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Stars from "../../../components/Stars";

export default function Produtor({ name, image, distance, stars }) {

    const [selecionado,inverterSelecionado] = useReducer((selecionado) => !selecionado, false);
    const distanceMeters = (distance) => {
        return `${distance}m`;
    }
    const textDistance = useMemo(() => distanceMeters(distance),[distance]);

    return <TouchableOpacity
        style={styles.card}
        onPress={inverterSelecionado}
    >
        <Image source={image} accessibilityLabel={name} style={styles.image} />
        <View style={styles.info}>
            <View>
                <Text style={styles.name}>{name}</Text>
                <Stars
                    quantidade={stars}
                    editavel={selecionado}
                    grande={selecionado}
                />
            </View>
            <Text style={styles.distance}>{ textDistance }</Text>
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#F6F6F6',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: "row",
        //sombra para android ----
        elevation: 4,
        //sombra para ios --------
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        //------------------------

    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16,
    },
    info: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
    },
    name: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold',
    },
    distance: {
        fontSize: 12,
        lineHeight: 19,
    }
});
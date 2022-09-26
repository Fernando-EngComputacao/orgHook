import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { loadTopo } from '../../../services/carregaDados';
import logo from '../../../assets/logo.png';


export default function Topo() {
   
        return <View style={styles.topo}>
            <Image source={logo} style={styles.image} />
            <Text style={styles.welcome}>Olá, Fernando Furtado!</Text>
            <Text style={styles.legenda}>Encontre os melhores produtores</Text>
        </View>

}

const styles = StyleSheet.create({
    topo: {
        backgroundColor: '#F6F6F6',
        padding: 16,
    },
    image: {
        width: 70,
        height: 18,
    },
    welcome: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
    },
    legenda: {
        fontSize: 16,
        lineHeight: 26,
    }
});
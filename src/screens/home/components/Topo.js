import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { carregaTopo } from '../../../services/carregaDados';
import logo from '../../../assets/logo.png';


class Topo extends React.Component {

    state = {
        topo: {
            welcome: '',
            legenda: '',
        }
    }

    atualizaTopo() {
        this.setState({topo:  carregaTopo()});
    }

    componentDidMount(){
        this.atualizaTopo();
    }

    render() {
        return <View style={styles.topo}>
            <Image source={logo} style={styles.image} />
            <Text style={styles.welcome}> { this.state.topo.welcome } </Text>
            <Text style={styles.legenda}>{ this.state.topo.legenda }</Text>
        </View>
    }

}

const styles = StyleSheet.create({
    topo: {
        backgroundColor: '#F6F6F6',
        padding: 16,
    },
    image: {
        width: 70,
        height: 28,
    },
    welcome: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        color: '#464646',
    },
    legenda: {
        fontSize: 16,
        lineHeight: 26,
        color: '#A3A3A3'
    }
});

export default Topo;    
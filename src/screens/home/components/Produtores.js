import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';

import Produtor from './Produtor';
import useProdutores from '../../../hooks/useProdutores';

export default function Produtores({ topo: Topo }) {

    const [title, list] = useProdutores();

    const TopoList = () => {
        return <>
            <Topo />
            <Text style={styles.title}> {title} </Text>
        </>
    }

    return <FlatList
        data={list}
        renderItem={({ item }) => <Produtor {...item} />}
        keyExtractor={({ name }) => name}
        ListHeaderComponent={TopoList}
    />
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646',
    }
});
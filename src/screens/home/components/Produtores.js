import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';

import { carregaProdutores } from '../../../services/carregaDados';
import Produtor from './Produtor';

export default function Produtores({ topo: Topo }) {

    const [title, setTitle] = useState('');
    const [list, setList] = useState([]);

    useEffect(() => {
        const retorno = carregaProdutores();
        setTitle(retorno.title);
        setList(retorno.list);
    }, []);

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
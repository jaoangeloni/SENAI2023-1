import React from 'react';
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import ItemDetalhe from '../components/itemDetalhe'

export default function detalheScreen({ navigation, route }) {
    const dados = route.params.dados.detalhes
    console.log(dados)
    return (
        <View style={styles.container}>
            <FlatList
                data={dados}
                style={styles.list}
                renderItem={({ item }) => <TouchableOpacity style={styles.item}>
                    <ItemDetalhe item={item}/>
                </TouchableOpacity>}
            />
        </View >);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        width: '100%',
        paddingHorizontal: 20,
    },
    item: {
        flex: 1,
        flexDirection: 'row',
    },
    logo: {
        width: '90%',
        height: 100,
        margin: 20
    }
});

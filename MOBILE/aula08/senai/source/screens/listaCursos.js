import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import ItemCurso from '../components/itemCurso'

export default function cursoScreen({ navigation, route }) {
    const dados = route.params.dados.cursos
    
    const abrirDetalhes = (dados) => {
        navigation.navigate('Detalhes', { dados });
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={dados}
                style={styles.list}
                renderItem={({ item }) => <TouchableOpacity style={styles.item} onPress={() => abrirDetalhes(item)}>
                    <ItemCurso item={item} />
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

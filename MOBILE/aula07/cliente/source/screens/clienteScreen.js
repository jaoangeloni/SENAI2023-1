import React from 'react';
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Clientes from '../mocks/clientesMock'

export default function ClientesScreen({ navigation }) {

    const abrirDetalhes = (dados) => {
        navigation.navigate('Detalhes', { dados })
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={Clientes}
                style={styles.list}
                renderItem={({ item }) => 
                <TouchableOpacity
                    style={styles.item} 
                    onPress={() => {abrirDetalhes(item)}}
                >
                    <Image style={styles.img} source={item.avatar}/>
                    <View>
                        <Text>CPF: {item.cpf}</Text>
                        <Text>Nome: {item.nome} {item.sobrenome}</Text>
                        <Text>E-mail: {item.email}</Text>
                    </View>
                </TouchableOpacity>}
            />
        </View >);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: "white"
    },
    list: {
        width: '100%',
        paddingHorizontal: 20,
    },
    item: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        backgroundColor: "#d6d6d6",
        borderRadius: "8px",
        padding: "5px"
    },
    img:{
        width: "100px",
        height: "100px",
        margin: 5,
    }
});
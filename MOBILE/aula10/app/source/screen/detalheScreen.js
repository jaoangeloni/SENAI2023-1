import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function DetalhesScreen({ route }) {
    const cliente = route.params.dados

    return (
        <View style={styles.container}>
            <Image style={styles.img} source={cliente.foto}></Image>
            <View>
                <Text style={styles.text}>ID: {cliente.id}</Text>
                <Text style={styles.text}>Nome: {cliente.nome} {cliente.sobrenome}</Text>
                <Text style={styles.text}>E-mail: {cliente.email}</Text>
                <Text style={styles.text}>Nascimento: {cliente.nascimento}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        backgroundColor: '#ffedd6'
    },
    img: {
        width: '100%',
        height: '100%',
        maxHeight: 300,
        padding: 10,
        marginBottom: 10,

    },
    textos: {
        width: '100%',
    },
    text: {
        fontSize: 16,
        margin: 5
    },
    containerAlterarPerfil: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
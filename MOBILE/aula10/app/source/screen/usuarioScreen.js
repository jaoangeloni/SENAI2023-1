import React from 'react'
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import usuarios from '../mocks/mockup'
import ItemLista from '../components/ItemLista'

export default function UsuarioScreen({ navigation }) {

    const abrirDetalhes = (dados) => {
        navigation.navigate('Detalhes', { dados })
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Usuários</Text>
            </View>
            <FlatList
                data={usuarios}
                style={styles.list}

                renderItem={({ item }) =>
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => abrirDetalhes(item)} >
                        <ItemLista item={item} />
                    </TouchableOpacity>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffedd6'
    },
    list: {
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 70
    },
    item: {
        flex: 1,
        flexDirection: 'row',
    },
    titleContainer: {
        backgroundColor: '#eb345e',
        width: '100%',
        height: 60,
        textAlign: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5,
    }
})
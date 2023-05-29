import { View, Text, StyleSheet, Image } from 'react-native'

export default function ItemLista({ item }) {

    return (
        <View style={styles.item}>
            <Image style={styles.img} source={item.foto} />
            <View>
                <Text style={styles.text}>ID: {item.id}</Text>
                <Text style={styles.text}>Nome: {item.nome} {item.sobrenome}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        // borderRadius: 50,
        width: 100,
        height: 100,
        margin: 8,
    },
    text: {
        fontSize: 16,
        margin: 9,
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
})
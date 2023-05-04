import { View, ImageBackground, StyleSheet, Text, Image } from "react-native";

export default function ItemLista({ item }) {
    return (
        <View style={styles.item}>
            <Image style={styles.img} source={item.background}/>
            <View>
                <Text style={styles.sigla}>{item.sigla}</Text>
                <Text style={styles.nome}>{item.nome}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        margin: 5,
        padding: 5,
        alignItems: "center",
        backgroundColor: '#FFF',
        borderBottomColor: 'red',
        borderBottomWidth: 2
    },
    nome: {
        fontSize: 13,
        margin: 8,
    },
    sigla: {
        fontSize: 32,
        margin: 8,
        fontStyle: 'italic'
    },
    img: {
        width: 100,
        height: 100,
    }
});
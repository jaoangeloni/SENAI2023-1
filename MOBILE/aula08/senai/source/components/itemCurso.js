import { View, StyleSheet, Text } from "react-native";


export default function ItemLista({ item }) {
    return (
        <View style={styles.item}>
                <Text style={styles.nome}>{item.nome}</Text>
                <Text style={styles.mod}>{item.categoria}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'column',
        margin: 5,
        padding: 5,
        backgroundColor: '#FFF',
        borderBottomColor: 'red',
        borderBottomWidth: 2
    },
    nome: {
        fontSize: 16,
        fontWeight: "bold",
        margin: 8,
    },
    mod: {
        fontSize: 16,
        margin: 8,
        textAlign: "right",
        fontStyle: "italic"
    },
});
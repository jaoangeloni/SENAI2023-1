import { View, StyleSheet, Text } from "react-native";


export default function ItemDetalhe({ item }) {
    return (
        <View style={styles.item}>
                <Text style={styles.nome}>{item.descricao}</Text>
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
});
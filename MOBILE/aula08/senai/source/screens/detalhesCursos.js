import React from 'react';
import { View, StyleSheet, Text} from 'react-native';

export default function detalheScreen({route}) {
    const dados = route.params.dados.detalhes

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.titulo}>{dados.nome}</Text>
            </View>
            <View style={styles.box}>
                    <Text style={styles.texto}>
                        <Text style={styles.bold}>Area: </Text>
                        {dados.area}</Text>
                    <Text style={styles.texto}>
                        <Text style={styles.bold}>Carga: </Text> 
                        {dados.carga}</Text>
                    <Text style={styles.texto}>
                        <Text style={styles.bold}>Telefone: </Text>  
                        {dados.telefone}</Text>
                    <Text style={styles.texto}>
                        <Text style={styles.bold}>Email: </Text>  
                        {dados.email}</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.texto}>
                <Text style={styles.bold}>Descrição: </Text>
                    {dados.descricao}</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.texto}>
                <Text style={styles.bold}>Saiba mais: </Text> 
                {dados.site}</Text> 
            </View>
        </View >);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        height: 100,
        padding: 15,
        gap: 10
    },
    box: {
        width:"100%",
        backgroundColor: "#fff",
        borderBottomColor: "red",
        borderBottomWidth: 2,
        padding: 15
    },
    texto: {
        fontSize: 16,
    },
    bold:{
        fontWeight: "bold"
    },
    titulo: {
        fontSize: 22,
        fontStyle: 'italic' 
    }
});
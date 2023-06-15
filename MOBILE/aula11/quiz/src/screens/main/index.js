import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default function MainScreen({ navigation }) {

    const abrirPerguntas = () => {
        navigation.navigate('PerguntasScreen');
    }

  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Quiz - Astronomia</Text>
        <TouchableOpacity style={styles.botao} onPress = {() => abrirPerguntas()}>
            <Text style={styles.textoBotao}> Iniciar </Text>
        </TouchableOpacity>
    </View>
  );
}

import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botao: {
        margin: 50,
        backgroundColor : "#826ade",
        padding: 10,
        borderRadius: 50
    },
    titulo: {
        fontSize: "2rem",
        fontWeight: 'bold'
    },
    textoBotao: {
        fontSize: "1.5rem",
        color: "#fff",
    }
});
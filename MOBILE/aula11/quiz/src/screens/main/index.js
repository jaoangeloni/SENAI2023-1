import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default function MainScreen({ navigation }) {

    const abrirPerguntas = () => {
        navigation.navigate('PerguntasScreen');
    }

  return (
    <View style={styles.container}>
        <Text>Quiz - Astronomia</Text>
        <TouchableOpacity style={styles.botao} onPress = {() => abrirPerguntas()}>
            <Text> Iniciar </Text>
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
});
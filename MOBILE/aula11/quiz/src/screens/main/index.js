import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default function MainScreen({ navigation }) {

    const abrirPerguntas = () => {
        navigation.navigate('PerguntasScreen');
    }


    const fadeIn = () => {
        Animated.timing(fadeAnim, {
          toValue: 0.5,
          duration: 5000,
          useNativeDriver: true,
        }).start();
      };

      
  return (
    <View style={styles.container}>
        <Text style={styles.quiz}>Quiz - Astronomia</Text>
        <TouchableOpacity style={styles.botao} onPress = {() => abrirPerguntas()}>
            <Text style={styles.iniciar}> Iniciar </Text>
        </TouchableOpacity>
    </View>
  );
}

import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        backgroundImage: 'url(https://i.pinimg.com/736x/1f/e9/fd/1fe9fd735b4c3b198d10236a5fa592f8--phone-wallpapers-daily-inspiration.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    quiz:{
        fontWeight: 'bold',
        fontSize: '30px',
        color: '#fff',
    },
    botao:{
        backgroundColor: '#826ade',
        width: '30vw',
        textAlign: 'center',
        height: '5vh',
        justifyContent: 'center',
        borderRadius: '10px',
        margin: '30px',
    },
    iniciar:{
        color: '#ffffff',
    }
});
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
        backgroundImage: 'url(https://naniwallpaper.com/files/wallpapers/anime-space/8-anime%20space-1080x1920.jpg)',
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
        textShadowColor:'#000',
        textShadowOffset:{width: 3, height: 3},
    },
    botao:{
        width: '30vw',
        textAlign: 'center',
        height: '5vh',
        justifyContent: 'center',
        borderRadius: '10px',
        margin: '30px',
        backgroundColor: '#57FF78',
        borderBottomColor: "#329947",
        borderBottomWidth: "5px",
    },
    iniciar:{
        color: "#4c3e71",
        fontWeight: 'bold',
    }
});
import { Text, TouchableOpacity, View } from 'react-native';

export default function ResultadosScreen({ route }) {
  const { contadorAcertou, contadorErrou } = route.params;
  var resultado = ""

  const reiniciar =() => {
    window.location.reload()
  }

  if(contadorAcertou >= 6)
    resultado = "Aprovado"
  else
    resultado = "Reprovado"

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Resultados:</Text>
      <Text style={styles.texto}>{contadorAcertou} acertos</Text>
      <Text style={styles.texto}>{contadorErrou} erros</Text>
      <Text style={styles.resultado}>{resultado}!</Text>
      <TouchableOpacity onPress={() => reiniciar()}><Text style={styles.reiniciar}>Reiniciar</Text></TouchableOpacity>
    </View>
  );
}

import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundImage: 'url(https://naniwallpaper.com/files/wallpapers/anime-space/8-anime%20space-1080x1920.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '15px',
    },
    reiniciar:{
      width: '40vw',
      height: '4vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#57FF78',
      borderBottomWidth: "5px",
      borderBottomColor: "#329947",
      color: "#4c3e71",
      textAlign: 'center',
      borderRadius: '15px',
    },
    titulo:{
      color: '#FFFF',
      textShadowColor:'#000',
      textShadowOffset:{width: 3, height: 3},
      fontSize: '2rem',
      margin: '20px',
      fontWeight: 'bold',
    },
    texto:{
      color: '#FFFF',
      textShadowColor:'#000',
      textShadowOffset:{width: 2, height: 2},
      fontSize: '1.5rem',
    },
    resultado:{
      color: '#FFFF',
      textShadowColor:'#000',
      textShadowOffset:{width: 3, height: 3},
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },

});
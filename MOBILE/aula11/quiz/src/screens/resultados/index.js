import { Text, TouchableOpacity, View } from 'react-native';

export default function ResultadosScreen({ route }) {
  const { contadorAcertou, contadorErrou } = route.params;
  var resultado = ""

  const reiniciar =() => {
    window.location.reload()
  }

  if(contadorAcertou >= 4)
    resultado = "Aprovado"
  else
    resultado = "Reprovado"

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Resultados:</Text>
      <Text style={styles.texto}>Acertos: {contadorAcertou}</Text>
      <Text style={styles.texto}>Erros: {contadorErrou}</Text>
      <Text style={styles.resultado}>{resultado}</Text>
      <TouchableOpacity onPress={() => reiniciar()}><Text style={styles.reiniciar}>Reiniciar</Text></TouchableOpacity>
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
      gap: '15px',
    },
    reiniciar:{
      width: '40vw',
      height: '4vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#826ade',
      textAlign: 'center',
      color: '#FFFF',
      borderRadius: '15px',
    },
    titulo:{
      color: '#FFFF',
      fontSize: '2rem',
      margin: '20px',
      fontWeight: 'bold',
    },
    texto:{
      color: '#FFFF',
      fontSize: '1.2rem',
    },
    resultado:{
      color: '#FFFF',
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },

});
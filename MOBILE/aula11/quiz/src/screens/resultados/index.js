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
    resultado = "reprovado"

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Resultados:</Text>
      <Text style={styles.texto}>Acertos: {contadorAcertou}</Text>
      <Text style={styles.texto}>Erros: {contadorErrou}</Text>
      <Text style={styles.resultado}>{resultado}</Text>
      <TouchableOpacity onPress={() => reiniciar()}><Text>Reiniciar</Text></TouchableOpacity>
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
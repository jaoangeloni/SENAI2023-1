import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import Pergunta from '../../components/perguntas'
import Mock from '../../mocks/mock'

export default function PerguntasScreen({ navigation, route }) {
  var contadorAcertou = 0;
  var contadorErrou = 0;

  const Verificar = (alternativas, indice) => {
    if(alternativas[indice].status === false){
        alert("Errou");
        contadorErrou ++;
        indice ++
    }
    else{
        alert("Acertou");
        contadorAcertou ++;
        indice++
    }
  }
  
  const indice = 0;
  
  const pergunta = Mock[indice].pergunta;

  const alternativas = pergunta.alternativas;

  console.log(pergunta)

  return (
    <View style={styles.container}>
      <Text>{pergunta}</Text>
      <TouchableOpacity style={styles.resposta} onPress={() => Verificar(alternativas, 0)}><Text style={styles.alternativa}>{item.alternativas[0].resp}</Text></TouchableOpacity>
      <TouchableOpacity style={styles.resposta} onPress={() => Verificar(alternativas, 1)}><Text style={styles.alternativa}>{item.alternativas[1].resp}</Text></TouchableOpacity>
      <TouchableOpacity style={styles.resposta} onPress={() => Verificar(alternativas, 2)}><Text style={styles.alternativa}>{item.alternativas[2].resp}</Text></TouchableOpacity>
      <TouchableOpacity style={styles.resposta} onPress={() => Verificar(alternativas, 3)}><Text style={styles.alternativa}>{item.alternativas[3].resp}</Text></TouchableOpacity>
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
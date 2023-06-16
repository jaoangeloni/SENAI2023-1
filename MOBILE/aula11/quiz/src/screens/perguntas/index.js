import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import Mock from '../../mocks/mock';

export default function PerguntasScreen({ navigation, route }) {
  const [indice, setIndice] = useState(0);
  const [contadorAcertou, setContadorAcertou] = useState(0);
  const [contadorErrou, setContadorErrou] = useState(0);

  const avancarParaProximaPergunta = () => {
    setIndice(indice + 1);
  };

  const verificarResposta = (status) => {
    if (status === false) {
      alert('Errou');
      setContadorErrou(contadorErrou + 1);
    } else {
      alert('Acertou');
      setContadorAcertou(contadorAcertou + 1);
    }

    avancarParaProximaPergunta();
  };
  
  const perguntaAtual = Mock[indice].pergunta;
  const alternativas = Mock[indice].alternativas;
      
  return (
    <View style={styles.container}>
      <Text>{perguntaAtual}</Text>
      <TouchableOpacity style={styles.resposta} onPress={() => verificarResposta(alternativas[0].status)}>
        <Text style={styles.alternativa}>{alternativas[0].resp}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.resposta} onPress={() => verificarResposta(alternativas[1].status)}>
        <Text style={styles.alternativa}>{alternativas[1].resp}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.resposta} onPress={() => verificarResposta(alternativas[2].status)}>
        <Text style={styles.alternativa}>{alternativas[2].resp}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.resposta} onPress={() => verificarResposta(alternativas[3].status)}>
        <Text style={styles.alternativa}>{alternativas[3].resp}</Text>
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
    pergunta: {
      fontSize: 16,
      backgroundColor: "#d6d6d6",
      padding: 10
    },
    alternativa: {
      fontSize: 16,
      margin: 8,
      fontStyle: "italic"
    },
    resposta:{
      padding: 5,
      borderBottomWidth: "1px",
      borderBottomColor: "#d6d6d6"
    }
});
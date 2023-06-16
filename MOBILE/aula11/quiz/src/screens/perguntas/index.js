import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Mock from '../../mocks/mock';

export default function PerguntasScreen({ navigation, route }) {
  const [indice, setIndice] = useState(0);
  const [contadorAcertou, setContadorAcertou] = useState(0);
  const [contadorErrou, setContadorErrou] = useState(0);
  
  const abrirResultados = () => {
    return navigation.navigate('ResultadosScreen', {
      contadorAcertou: contadorAcertou,
      contadorErrou: contadorErrou,
    });
  } 

  if (indice >= Mock.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.fimp}>Fim das perguntas</Text>
        <TouchableOpacity onPress={() => abrirResultados()}><Text style={styles.resultados}>Ver resultados</Text></TouchableOpacity>
      </View>
    );
  }

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
      <Text style={styles.pergunta}>{perguntaAtual}</Text>
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
    backgroundImage: 'url(https://i.pinimg.com/736x/20/92/c5/2092c5e7501ee9892b118bfffcdc846f.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
},    
pergunta: {
    fontSize: 16,
    backgroundColor: "#826ade",
    borderRadius: '10px',
    margin: '10px',
    padding: 10,
    textAlign: 'center',
    color: '#FFFF',

},
alternativa: {
    fontSize: 16,
    margin: 8,
    fontStyle: "italic",
    backgroundColor: "#826ade",
    margin: '10px',
    color: '#FFFF',
  },
resposta:{
    padding: 5,
    borderBottomWidth: "1px",
    backgroundColor: "#826ade",
    alignItems: 'left',
    width: '85%',
    margin: '10px',
    borderRadius: '10px'
},
fimp:{
  color: '#FFFF',
  fontSize: '2rem',
  margin: '20px',
  fontWeight: 'bold',
},
resultados:{
  width: '40vw',
  height: '6vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#826ade',
  textAlign: 'center',
  color: '#FFFF',
  borderRadius: '15px',
}
});
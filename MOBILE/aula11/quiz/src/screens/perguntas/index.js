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
    backgroundImage: 'url(https://wallpaperaccess.com/full/6218778.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
},    
pergunta: {
    fontSize: 16,
    backgroundColor: "#fff",
    borderBottomColor: "#787878",
    color: "#4c3e71",
    borderBottomWidth: "5px",
    borderRadius: '10px',
    margin: '10px',
    padding: 10,
    textAlign: 'center',
    fontWeight: "bold",

},
alternativa: {
    fontSize: 16,
    margin: 8,
    fontStyle: "italic",
    margin: '10px',
    backgroundColor: "#fff",
    color: "#4c3e71",
  },
resposta:{
    padding: 5,
    borderBottomWidth: "5px",
    backgroundColor: "#fff",
    borderBottomColor: "#787878",
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
  textShadowColor:'#000',
  textShadowOffset:{width: 3, height: 3},
},
resultados:{
  width: '40vw',
  height: '6vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottomWidth: "5px",
  backgroundColor: '#57FF78',
  borderBottomColor: "#329947",
  color: "#4c3e71",
  textAlign: 'center',
  fontWeight: "bold",
  borderRadius: '15px',
}
});
import { useState } from 'react';

import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [peso, setPeso] = new useState("");
  const [altura, setAltura] = new useState("");
  const [resultadoIMC, setResultadoIMC] = new useState(0);
  const [resultadoDiagnostico, setResultadoDiagnostico] = new useState(0);

  const calcular = () => {
    let imc = (peso/(altura*altura))
    
    setResultadoIMC(peso/(altura*altura));

    if (imc < 18){
      setResultadoDiagnostico("Abaixo do Peso");
    }else if (imc < 25){
      setResultadoDiagnostico("Peso ideal");
    }else if (imc < 30){
      setResultadoDiagnostico("Sobrepeso");
    }else if (imc < 35){
      setResultadoDiagnostico("Obesidade Grau I");
    }else if (imc < 40){
      setResultadoDiagnostico("Obesidade Grau II");
    }else{
      setResultadoDiagnostico("Obesidade Grau III");
    }
    setAltura("");
    setPeso("");
  }

  return (
    <View style={styles.container}>

      <Image style={styles.icon} source={require('./assets/favicon.png')}/>  

      <Text style={styles.titulo}>Cálculo de IMC</Text> 

      <TextInput style={styles.inputs} placeholder={"Altura"} value={altura} onChangeText={(val) => { setAltura(val) }}/>

      <TextInput style={styles.inputs} placeholder={"Peso"} value={peso} onChangeText={(val) => { setPeso(val) }}/>
      
      <TouchableOpacity style={styles.botao} onPress={calcular}>
        <Text style={styles.texto}>Calcular</Text>
      </TouchableOpacity>

      <Text style={styles.textos}>IMC: {resultadoIMC.toFixed(2)}</Text>
      <Text style={styles.textos}>Diagnóstico: {resultadoDiagnostico}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8e3',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2rem'
  },
  titulo: {
    fontSize: '2rem',
    color: '#000',
    fontWeight: 'bold',
  },
  texto: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: 'white'
  },
  textos: {
    fontSize: '1.2rem',
    color: '#000',
  },
  inputs: {
    borderBottomColor: '#ff3636',
    borderBottomWidth: '2px',
    width: '90%',
    padding: '10px',
    color: '#000',
    fontSize: '16px',
  },
  botao:{
    alignItems: 'center',
    backgroundColor: '#ff3636',
    padding: '10px',
    width: '90%'
  },
  icon:{
    width:'100px',
    height:'100px',
  }
});
import { useState } from 'react'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity  } from 'react-native';

export default function App() {

  const [peso, setPeso] = new useState("");
  const [altura, setAltura] = new useState("");
  const [resultadoIMC, setResultadoIMC] = new useState(0);
  const [resultadoDiagnostico, setResultadoDiagnostico] = new useState(0);

  const CalcIMC = () => {
    setResultadoIMC(peso/(altura*altura));
    if (resultadoIMC < 18){
      setResultadoDiagnostico("Abaixo do Peso");
    }else if (resultadoIMC < 25){
      setResultadoDiagnostico("Peso ideal");
    }else if (resultadoIMC < 30){
      setResultadoDiagnostico("Sobrepeso");
    }else if (resultadoIMC < 35){
      setResultadoDiagnostico("Obesidade Gral I");
    }else if (resultadoIMC < 40){
      setResultadoDiagnostico("Obesidade Gral II");
    }else if (resultadoIMC < 50){
      setResultadoDiagnostico("Obesidade Gral III");
    }
    setAltura("");
    setPeso("");
  }

  

  return (
    <View style={styles.container}>
      <Text>IMC</Text>
      <TextInput style={styles.input} placeholder="Digite seu peso:" value={peso} onChangeText={ (val) => setPeso((val))}/>
      <TextInput style={styles.input} placeholder="Digite sua altura" value={altura} onChangeText={ (val) => setAltura((val))}/>
      <Button style={styles.button} title="Calcular IMC" onPress={() => CalcIMC()}/>
      <Text style={styles.text}>IMC: {resultadoIMC.toFixed(2)} </Text>
      <Text style={styles.text}>Diagnostico: {resultadoDiagnostico} </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7c7780',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    margin: "10px",
    fontSize: "1.5rem",
    fontWeight: 'bold'
  },
  input:{
    borderRadius: '10px',
    borderBottomWidth: '1px',
    margin: '10px',
    borderBottomColor: '#333',
    backgroundColor: '#c8bccf',
    fontWeight: 'bold',
    padding: '5px'
  },
  text:{
    padding: '10px',
    fontWeight: 'bold'
  }
});

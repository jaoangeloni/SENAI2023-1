import { useState } from 'react';

import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, filter } from 'react-native';

export default function App() {
  const[comprimento, setComprimento] = new useState ("")
  const[corrente, setCorrente] = new useState("")
  const[resultado220, setResultado220] = new useState(0)
  const[resultado127, setResultado127] = new useState(0)

  const calcular = () => {
    setResultado220((1.73 * comprimento * corrente) / 510,4);
    setResultado127((2 * comprimento * corrente) / 294,64);
    setComprimento("");
    setCorrente("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora Doidera</Text>

      <View style={styles.body}>
        <TextInput style={styles.input} placeholder={"Digite o comprimento em metros"} value={comprimento} onChangeText={ (val) => setComprimento(Number(val))}/>
        <TextInput style={styles.input} placeholder={"Digite a corrente em amperes"} value={corrente} onChangeText={ (val) => setCorrente(Number(val))}/>

        <TouchableOpacity onPress={() => calcular()} style={styles.button}>
          <Text style={styles.butao}>Calcular</Text>
        </TouchableOpacity>

        <Text style={styles.resultado}>O resultado para 220V:   {resultado220.toFixed(2)} mm</Text>
        <Text style={styles.resultado}>O resultado para 127V:   {resultado127.toFixed(2)} mm</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7f7acf',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '50px'
  },
  input: {
    backgroundColor: '#fff',
    padding: '7px'
  },
  titulo:{
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color:'#ffbb00',
  },
  body:{
    gap: '20px',
    padding: '60px'
  },
  resultado:{
    fontSize: '1rem',
    fontWeight: 'bold'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ffbb00',
    padding: '10px'
  },
  butao: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform:'uppercase',
    fontSize:'1rem'
  }
});

import { useState } from 'react';

import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [valor, setValor] = new useState("")
  const [juros, setJuros] = new useState("")
  const [parcelas, setParcelas] = new useState("")
  const [montante, setMontante] = new useState(0)
  const [valorParcela, setvalorParcela] = new useState(0)

  const calcular = () => {
    setMontante(valor * (1 + juros/100)**parcelas)
    setvalorParcela((valor * (1 + juros/100)**parcelas) / parcelas)
    
    valor = new useState("")
    juros = new useState("")
    parcelas = new useState("")
  }

  return (
    <View style={styles.container}>

      <Image style={styles.icon} source={require('./assets/favicon.png')}/>  

      <Text style={styles.titulo}>Viabilidade Econômica</Text> 

      <TextInput style={styles.inputs} placeholder={"Valor do empréstimo"} value={valor} onChangeText={(val) => { setValor(Number(val)) }}/>

      <TextInput style={styles.inputs} placeholder={"Quantidade de vezes que irá parcelar"} value={parcelas} onChangeText={(val) => { setParcelas(Number(val)) }}/>

      <TextInput style={styles.inputs} placeholder={"Taxa de juros em %"} value={juros} onChangeText={(val) => { setJuros(val) }}/>

      
      
      <TouchableOpacity style={styles.botao} onPress={calcular}>
        <Text style={styles.texto}>Calcular</Text>
      </TouchableOpacity>

      <Text style={styles.textos}>Montante: {montante.toFixed(2)}</Text>
      <Text style={styles.textos}>Valor da parcela: {valorParcela.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#758fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2rem'
  },
  titulo: {
    fontSize: '2rem',
    color: '#fff',
    fontWeight: 'bold',
  },
  texto: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#327d50',
  },
  textos: {
    fontSize: '1.2rem',
    color: '#fff',
  },
  inputs: {
    borderBottomColor: '#ffbb00',
    borderBottomWidth: '2px',
    width: '90%',
    padding: '10px',
    color: '#fff',
    fontSize: '16px',
  },
  botao:{
    alignItems: 'center',
    backgroundColor: '#66ffa3',
    padding: '10px',
    color: '#fff',
    width: '90%'
  },
  icon:{
    width:'100px',
    height:'100px',
  }
});
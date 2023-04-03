import { useState} from 'react';

import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

import ButtonCadastrar from './src/components/button-cadastrar';

export default function App() {
  const [numero, setNumero] = new useState(0);
  const [nome, setNome] = new useState("");
  
  const [vali, setVali] = new useState(0);
  const [valii, setValii] = new useState(0);
  const [result, setResult] = new useState(0);

  const tituloBotao = "cadastrar";
  const texto = "meu número é ";

  const incrementar = () =>{
    let valor = numero + 1;
    setNumero(valor);
  }

  const cadastrar = () => {
    console.log(nome);
    setNome("")
  }

  const somar = () => {
    setResult(vali + valii);
    setVali(0);
    setValii(0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{texto + numero}</Text>
      <TextInput style={styles.input} onChangeText={ (val) => setNome(val) } value={nome}/>
      <Button title={tituloBotao} onPress={() => cadastrar()}/>
      <TouchableOpacity style={styles.button} onPress={() => { incrementar ()}}>
        <Text>Autenticar</Text>
      </TouchableOpacity>
      <ButtonCadastrar/>


      <TextInput style={styles.input} value={vali} onChangeText={ (val) => setVali(Number(val))}/>
      <TextInput style={styles.input} value={valii} onChangeText={ (val) => setValii(Number(val))}/>
      <Button title="Somar"onPress={() => somar()}/>
      <Text>O resultado da soma é: {result}</Text>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.5rem'
  },
  title:{
    color: 'blue',
    fontWeight: 'bold',
    fontSize: '1.5rem'
  },
  input:{
    borderBottomWidth: '2px',
    borderBottomColor: 'blue',
    padding: '5px'
  },
  button:{
    fontFamily: 'Arial',
    fontWeight: 'bold',
    backgroundColor: '#f07',
    padding: '8px',
    borderRadius:'6px'
  }
});

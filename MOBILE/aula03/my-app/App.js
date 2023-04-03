import { useState } from 'react';
import { StyleSheet, Text, View, Switch, Image } from 'react-native';

const icon= require('./assets/icon.png')


export default function App() {
  const [ habilitado, setHabilitado] = new useState(false)
  const habilitar = () => {
    setHabilitado(!habilitado);
  }

  return (
    <View style={styles.container}>
      <Switch
        value = {habilitado}
        onValueChange={habilitar}
      />
      <Image
        source={{
          uri : (habilitado)
              ? "https://cdn-icons-png.flaticon.com/512/3625/3625060.png"
              : "https://cdn-icons-png.flaticon.com/512/3471/3471635.png"
        }}
        style={styles.icon}
      />


      {
        // (habilitado)
        // ?
        // <Image
        //   source={{
        // uri: "https://cdn-icons-png.flaticon.com/512/3625/3625060.png"
        //   }}
        //   style={styles.icon}
        // />
        // :
        // <Image
        //   source={{
        //     uri: "https://cdn-icons-png.flaticon.com/512/3471/3471635.png"
        //   }}
        //   style={styles.icon}
        // />
          

      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 32
  },
  icon: {
    width: '68px',
    height: '68px'
  }
});

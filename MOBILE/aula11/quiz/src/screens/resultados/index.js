import { Text, View } from 'react-native';

export default function ResultadosScreen() {
  return (
    <View style={styles.container}>
      <Text>Resultados</Text>
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
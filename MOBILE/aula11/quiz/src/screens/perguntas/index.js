import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function PerguntasScreen() {
  return (
    <View style={styles.container}>
      <Text>Quiz</Text>
      <StatusBar style="auto" />
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
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <Text>Quiz - Astronomia</Text>
      <StatusBar style="auto" />
      <TouchableOpacity></TouchableOpacity>
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
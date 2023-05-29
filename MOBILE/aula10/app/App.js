import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet, View, Text } from 'react-native'
import Routes from '../app/source/routes';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
     <NavigationContainer style={styles.stackUsuarios}>
       <View style={styles.title}>
         <Text style={styles.titleText}>Usuários</Text>
       </View>
       <Routes />
     </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  stackUsuarios: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    backgroundColor: '#FFAA32',
    position: 'absolute',
  },
  titleText: {
    fontSize: 25,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5
  }
})

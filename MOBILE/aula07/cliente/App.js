import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ClientesScreen from './source/screens/clienteScreen';
import DetalheScreen from './source/screens/detalheScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ClientesScreeen"
          component={ClientesScreen}
          options={{ title: 'Lista de Clientes' }} />
        <Stack.Screen
          name="Detalhes"
          component={DetalheScreen}
          options={{ title: 'Detalhes do Cliente' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
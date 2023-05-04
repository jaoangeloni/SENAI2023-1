import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import tiposCurso from './source/screens/tiposCurso';
import listaCursos from './source/screens/listaCursos';
import detalhesCursos from './source/screens/detalhesCursos';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="tiposCurso"
          component={tiposCurso}
          options={{ title: 'Categorias de curso' }} />
        <Stack.Screen
          name="Cursos"
          component={listaCursos}
          options={{ title: 'Cursos' }} />
        <Stack.Screen
          name="Detalhes"
          component={detalhesCursos}
          options={{ title: 'Detalhes' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenIMC from './components/formIMC.js';
import LoginForm from './components/loginForm.js';


const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
            name="Login"
            component={LoginForm}
            options={{ title: 'Bem vindo ' }} />
            
        <Stack.Screen
            name="telaIMC"
            component={ScreenIMC}
            options={{ title: 'Tela Imc' }}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

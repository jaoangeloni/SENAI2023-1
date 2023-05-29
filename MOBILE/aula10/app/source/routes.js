import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { Platform } from 'react-native'
import UsuarioScreen from './screen/usuarioScreen'
import DetalhesScreen from './screen/detalheScreen'

const Tab = createBottomTabNavigator();

export default function Routes() {

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#FF0000',
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: '#fff',
                    borderTopWidth: 0,

                    bottom: Platform.OS === 'android' ? 14 : 10,
                    left: 14,
                    right: 14,
                    // bottom: 10,
                    borderRadius: 4,
                    height: 60,

                },
            }}
        >
            <Tab.Screen
                name="Usuarios"
                component={UsuarioScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Ionicons
                                name="home"
                                color={color}
                                size={size} />
                        }
                        else {
                            return <Ionicons
                                name='home-outline'
                                color={color}
                                size={size}
                            />
                        }
                    }
                }}
            />
            <Tab.Screen
                name="Detalhes"
                component={DetalhesScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        if (focused) {
                            return (
                                <Ionicons
                                    name='bookmark'
                                    size={size}
                                    color={color}
                                />
                            )
                        }
                        else {
                            return (
                                <Ionicons
                                    name='bookmark-outline'
                                    size={size}
                                    color={color}
                                />
                            )
                        }
                    }
                }}
            />

        </Tab.Navigator>
    )
}
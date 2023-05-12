import { useState } from "react"
import {
    View,
    Text,
    StyleSheet,
} from "react-native"
import { Ionicons } from '@expo/vector-icons'


export default function Cart() {
    const [mostrarCart, setMostrarCart] = useState(false)

    const precos = window.localStorage.getItem("precos")
    // const teste = precos.split(',')
    let total = 0

    // teste.forEach(item => total += Number(item))
    // console.log({teste, local})

    const toggleMostrarCart = () => setMostrarCart(!mostrarCart)

    return (
        <>
            {mostrarCart === true
                ? (
                    <View style={styles.container}>
                        <Text style={styles.preco}>
                            0,00
                        </Text>
                    </View>
                ) 
                : (
                    <View onPress={() => 
                        setMostrarCart(true)} 
                        style={styles.containerDois}>
                        <Text style={styles.icon}>
                            <Ionicons
                                name={'cart'}
                                size={20}
                                color={'white'}
                            />
                        </Text>
                    </View>
                )
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        padding: 10,
        flex: 1,
        top: '10px',
        left: '10px',
        position: 'fixed',
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999,
    },
    preco: {
        color: '#f1f1f1'
    },
    containerDois: {
        width: 50,
        height: 30,
        padding: 10,
        paddingRight:5,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: 'center',
        flex: 1,
        top: '10px',
        left: '-25px',
        position: 'fixed',
        backgroundColor: 'orange',
        alignItems: 'flex-end',
        justifyContent: 'center',
        zIndex: 999,
    },
    icon: {

    }
})
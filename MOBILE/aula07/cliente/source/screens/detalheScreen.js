import React from "react";
import { View, StyleSheet, Text, Image} from 'react-native';

export default function DetalheScreen({ navigation, route}) {
    const cliente = route.params.dados
    return(
        <View style={styles.container}>
            <Image style={styles.img} source={cliente.avatar}/>
            <View style={styles.div}>
                <Text>CPF: {cliente.cpf}</Text>
                <Text>Nome: {cliente.nome} {cliente.sobrenome}</Text>
                <Text>Email: {cliente.email}</Text>
                <Text>Telefone: {cliente.telefone}</Text>
                <Text>CEP: {cliente.cep}</Text>
                <Text>Número: {cliente.numero}</Text>
                <Text>Complemento: {cliente.complemento}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img:{
        width: "200px",
        height: "200px",
        borderRadius: '1000px',
        margin: 50,
        backgroundColor: '#FFF'
    },
    div:{
        flex: 1,
        alignItems: 'center',

    }
});
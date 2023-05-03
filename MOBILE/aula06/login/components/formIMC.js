import { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import React from 'react';
import MaskInput from "react-native-mask-input";

export default function FormIMC() {
    const [valor, setValor] = new useState("")
    const [juros, setJuros] = new useState("")
    const [parcelas, setParcelas] = new useState("")
    const [montante, setMontante] = new useState(0)
    const [valorParcela, setvalorParcela] = new useState(0)

    const calcJuros = () => {
        setMontante(valor * (1 + juros/100)**parcelas)
        setvalorParcela((valor * (1 + juros/100)**parcelas) / parcelas)
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text>Agiotagem</Text>

                    <MaskInput
                        mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/]}
                        style={styles.textInput}
                        onChangeText={(masked, unmasked) => setValor(masked)}
                        value={valor}
                        placeholder="Valor do empréstimo"
                        keyboardType="numeric"
                    />

                    <MaskInput
                        mask={[/\d/, /\d/, /\d/ , /\d/]}
                        style={styles.textInput}
                        onChangeText={(masked, unmasked) => setParcelas(masked)}
                        value={parcelas}
                        placeholder="Quantidade de parcelas"
                        keyboardType="numeric"
                    />

                    <MaskInput
                        mask={[/\d/, '.' , /\d/]}
                        style={styles.textInput}
                        onChangeText={(masked, unmasked) => setJuros(masked)}
                        value={juros}
                        placeholder="Taxa de juros"
                        keyboardType="numeric"
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={calcJuros}
                    >
                        <Text>Calcular</Text>
                    </TouchableOpacity>
                    <Text>Montante: {montante.toFixed(2)}</Text>
                    <Text>Valor por parcela: {valorParcela.toFixed(2)}</Text>
                </View>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        gap: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        padding: 5,
        height: 40,
        width: 200,
        borderColor: '#006eff',
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0
    },
    button: {
        alignItems: "center",
        backgroundColor: "#fff",
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    }
});
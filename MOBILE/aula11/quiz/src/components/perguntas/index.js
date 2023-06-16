import { View, StyleSheet, Text, TouchableOpacity } from "react-native";


export default function pergunta({ item }) {
    var contadorAcertou = 0;
    var contadorErrou = 0;
    

    const Verificar = (alternativas, indice) => {
        if(alternativas[indice].status === false){
            alert("Errou");
            contadorErrou ++;
        }
        else{
            alert("Acertou");
            contadorAcertou ++;
        }
    }

    const alternativas = item.alternativas;

    return (
        <View style={styles.item}>
                <Text style={styles.pergunta}>{item.pergunta}</Text>
                <TouchableOpacity style={styles.resposta} onPress={() => Verificar(alternativas, 0)}><Text style={styles.alternativa}>{item.alternativas[0].resp}</Text></TouchableOpacity>
                <TouchableOpacity style={styles.resposta} onPress={() => Verificar(alternativas, 1)}><Text style={styles.alternativa}>{item.alternativas[1].resp}</Text></TouchableOpacity>
                <TouchableOpacity style={styles.resposta} onPress={() => Verificar(alternativas, 2)}><Text style={styles.alternativa}>{item.alternativas[2].resp}</Text></TouchableOpacity>
                <TouchableOpacity style={styles.resposta} onPress={() => Verificar(alternativas, 3)}><Text style={styles.alternativa}>{item.alternativas[3].resp}</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'column',
        margin: 5,
        padding: 5,
        backgroundColor: '#FFF',

    },
    pergunta: {
        fontSize: 16,
        backgroundColor: "#d6d6d6",
        padding: 10
    },
    alternativa: {
        fontSize: 16,
        margin: 8,
        fontStyle: "italic"
    },
    resposta:{
        padding: 5,
        borderBottomWidth: "1px",
        borderBottomColor: "#d6d6d6"
    }
}); 
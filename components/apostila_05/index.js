import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function App() {
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [total, setTotal] = useState(0);
}


export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}> Exemplo 5 </Text>

            <Text style={styles.textLabel}> 1º número </Text>
            <TextInput style={styles.txtEntrada} />

            <Text style={styles.txtSaida}> + </Text>

            <Text style={styles.textlabel}> 2º número </Text>
            <TextInput style={styles.txtEntrada} />

            <Text style={[styles.txtSaida, {margin: 0}]}> = </Text>

            <Text style={styles.textlabel}> Total </Text>
            <TextInput style={styles.txtEntrada} />

            <TouchableOpacity style={ styles.button}>
                <Text style={styles.textButton}> + </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FF80AB',
        padding: 8,
    },
    paragraph: {
        margin: 6,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#C51162',
    },
});
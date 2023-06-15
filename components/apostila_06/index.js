import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
export default function Index() {

    const {massa, SetMassa} = useState(0);
    const {altura, SetAltura} = useState(0);
    const {resultado, SetResultado} = useState(0);

    function Calcular() {
        const valor = massa / (altura * altura);
        SetResultado(valor);
    }

    return (

        <View style={styles.container}>
            
            <Text style={styles.paragraph}> Exemplo 6 </Text>
            
            <View style={styles.entradaImc}>
                <TextInput
                 placeholder='Massa'
                 placeholderTextColor='lightgray' 
                 keyboardType='numeric' 
                 style={styles.input}
                 onChangeText={(entrada) => SetMassa(entrada)} 
                 />
                <TextInput
                 placeholder='Altura' 
                 placeholderTextColor='lightgray' 
                 keyboardType='numeric' 
                 style={styles.input} 
                 onChangeText={(entrada) => SetAltura(entrada)}
                 />
            </View>
            
            <TouchableOpacity style={styles.button} onPress={() => Calcular()} >
                <Text style={styles.buttonText}> Calcular </Text>
            </TouchableOpacity>
            
            <Text style={styles.resultados}>{resultado}</Text>
        </View>

    );
};
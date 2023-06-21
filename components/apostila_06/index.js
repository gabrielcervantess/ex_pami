import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Index() {

  const [massa, setMassa] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [grau, setGrau] = useState(0);

  function Calcular() {
    const valor = massa / (altura * altura);
    setResultado(valor);

    if (valor < 18.5) {
      setGrau('Abaixo do peso');
    }
      else if (valor >= 18.5 && valor < 25) {
        setGrau('Peso normal');
      }
      else if (valor >= 25 && valor < 30) {
        setGrau('Sobrepeso');
      }
      else if (valor >= 30 && valor < 35) {
        setGrau('Obesidade grau I');
      }
      else if (valor >= 35 && valor < 40) {
        setGrau('Obesidade grau II');
      }
      else if (valor >= 40 && valor <= 60) {
        setGrau('Obesidade grau III');
      }
      else if (valor > 60) {
        setGrau('Planeta anão');
      }
  }

  return (

    <View style={styles.container}>
      <Text style={styles.paragraph}> Atividade 6 </Text>
      <View style={styles.entradaImc}>
        <TextInput
          placeholder='Massa'
          placeholderTextColor='lightgray'
          keyboardType='numeric'
          style={styles.input}
          onChangeText={(entrada) => setMassa(entrada)}
        />
        <TextInput
          placeholder='Altura'
          placeholderTextColor='lightgray'
          keyboardType='numeric'
          style={styles.input}
          onChangeText={(entrada) => setAltura(entrada)}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => Calcular()} >
        <Text style={styles.buttonText}> Calcular </Text>
      </TouchableOpacity>
      <Text style={styles.resultados}>{resultado.toFixed(2)}</Text>

      <Text style={styles.textresultados}>{grau}</Text>
    </View>

  );
}
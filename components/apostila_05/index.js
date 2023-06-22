import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function App() {

  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [total, setTotal] = useState(0);

  function Soma() {
    const conta = (parseInt(n1) + parseInt(n2));
    setTotal(conta.toString()); //retornar a string não é necessário na versão web
  }

  function Subtracao() {
    const conta = (parseInt(n1) - parseInt(n2));
    setTotal(conta.toString()); //retornar a string não é necessário na versão web
  }

  function Multiplicacao() {
    const conta = (parseInt(n1) * parseInt(n2));
    setTotal(conta.toString()); //retornar a string não é necessário na versão web
  }

  function Divisao() {
    const conta = (parseInt(n1) / parseInt(n2));
    setTotal(conta.toString()); //retornar a string não é necessário na versão web
  }

  function Apagar() {
    setTotal(0);
    setN1(0);
    setN2(0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Atividade 5
      </Text>

      <Text style={styles.txtSaida}> Calculadora básica </Text>

      <Text style={styles.textLabel}> 1º número </Text>
      <TextInput 
        style={styles.txtEntrada}
        onChangeText={ (entrada) => setN1(entrada)}
        value={n1} 
      />

      <Text style={styles.txtSaida}> + </Text>
      
      <Text style={styles.textLabel}> 2º número </Text>
      <TextInput
        style={styles.txtEntrada}
        onChangeText={ (entrada) => setN2(entrada)}
        value={n2} 
      />

      <Text style={[styles.txtSaida, {margin: 0}]}> = </Text>

      <Text style={styles.textLabel}> Total </Text>
      <TextInput
        style={styles.txtEntrada}
        editable={false}
        value={total} 
      />

      <View style={styles.section}>
      
        <View style={styles.section}>
          <TouchableOpacity style={styles.button} onPress={() => Soma()}>
          <Text style={styles.textButton}> + </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <TouchableOpacity style={styles.button} onPress={() => Subtracao()}>
          <Text style={styles.textButton}> - </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <TouchableOpacity style={styles.button} onPress={() => Multiplicacao()}>
          <Text style={styles.textButton}> * </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <TouchableOpacity style={styles.button} onPress={() => Divisao()}>
          <Text style={styles.textButton}> / </Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.zbutton} onPress={() => Apagar()}>
      <Text style={styles.textButton}> Zerar </Text>
      </TouchableOpacity>

    </View>
  );
}
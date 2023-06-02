import React, { useState } from 'react'; 
import { View, Text, TextInput, TouchableOpacity } from 'react-native'; 

import styles from './styles';

function Apostila04() {

    const [entrada1, setEntrada1] = useState('');
    const [entrada2, setEntrada2] = useState('');
    const [mensagem, setMensagem] = useState('Inserir nome e sobrenome:');

    function apresentaMensagem() {
        setMensagem(entrada1+' '+entrada2);
        setEntrada1('');
        setEntrada2('');
    }

    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Exemplo 4</Text>

            <Text
             style={styles.txtSaida}
             >
                {mensagem}
            </Text>

            <Text style={styles.nome}> Nome:</Text>

            <TextInput
                style={styles.txtEntrada}
                onChangeText={(e) => setEntrada1(e)}
                value={entrada1}
            />

            <Text style={styles.nome}> Sobrenome:</Text>

            <TextInput
                style={styles.txtEntrada}
                onChangeText={(e) => setEntrada2(e)}
                value={entrada2}
            />

            <TouchableOpacity 
                style={styles.button}
                onPress={() => apresentaMensagem()}
            >
                <Text style={styles.textButton}>Exibir nome completo</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Apostila04;
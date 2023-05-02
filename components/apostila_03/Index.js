import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Index() {
    return(
        <View style={StyleSheet.container} >
            <Text style={style.paragraph} >
                Exemplo 3
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#9E9E9E',
    },
});
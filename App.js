import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Atividade_04 from './components/apostila_04';
import Atividade_05 from './components/apostila_05';
import Atividade_06 from './components/apostila_06';

const corApp = '#fff';

export default function App() {
  return (
    <View style={styles.container}>
    <Atividade_05 />
    <StatusBar style={corApp==='#000' ? 'light' : 'dark'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#AAA',
    padding: 8,
  },
});
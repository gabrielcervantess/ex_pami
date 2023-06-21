import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Index from './components/apostila_06/index.js';

export default function App() {
  return (
    <View style={styles.container}>
    <Index/>
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
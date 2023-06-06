import * as React from 'react';
import { StyleSheet, View } from 'react-native'; 
import Constants from 'expo-constants';

import Index from './components/apostila_05/Index';

export default function App() {
  return (
    <View style={styles.container}>
      <Index />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#C51162',
    //alignItems: 'center',
    // justifyContent: 'center',
    padding: 8,
    paddingTop: Constants.statusBarHeight,
  },
});

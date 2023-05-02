import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import Index from './components/Index';

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
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#9E9E9E',
    padding: 8
  },
});

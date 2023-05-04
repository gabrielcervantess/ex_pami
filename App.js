import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';

//import Index from './components/Index';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Oi</Text>
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

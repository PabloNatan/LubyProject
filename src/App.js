import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from './constants/Constants';


import Navigation from './routes'

import { UserProvider } from './contexts/UserContext';

export default function App() {
  return (
    <View style={styles.container}>

      <UserProvider>
        <Navigation />
      </UserProvider>
      <StatusBar style='light' backgroundColor={Colors.background}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

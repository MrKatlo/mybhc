import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import Login from './backone'
import Landing from './landing'
import { StyleSheet, Image, Text, TextInput,Button, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      
    <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
})
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
 
import styles from '../../style.js';
 
const SetupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center'}}>Setup Screen</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Game Configurations')} 
        >
        <Text>Load Game Configuration</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => alert('TODO')} 
        >
        <Text>Save Game Configuration</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Lobby')} 
        >
        <Text>Set Game Configuration</Text>
      </TouchableOpacity>
    </View>
  );
};
 
export default SetupScreen;
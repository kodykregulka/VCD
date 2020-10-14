import React from 'react';
import { View, Text,TouchableOpacity, StyleSheet } from 'react-native';
 
import styles from '../../style.js';
 
const HostScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center'}}>Host Screen</Text> 
      <Text style={{textAlign: 'center'}}>Set session rules here (TODO)</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Lobby')} 
        >
        <Text>Launch Session</Text>
      </TouchableOpacity>
    </View>
  );
};
 
export default HostScreen;
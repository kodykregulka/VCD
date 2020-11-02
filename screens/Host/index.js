import React from 'react';
import { View, Text,TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
 
import styles from '../../style.js';
 
const HostScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center'}}>Host Screen</Text> 
      <Text style={{textAlign: 'center'}}>Set session rules here </Text>
      <TextInput
        style={styles.search_bar}
        placeholder="Session Name"
        
      />
      <TextInput
        style={styles.search_bar}
        placeholder="Max Players"
        
      />
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
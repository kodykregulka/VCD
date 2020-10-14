import React from 'react';
import { View, Text,TouchableOpacity, StyleSheet } from 'react-native';
 
import styles from '../../style.js';
 
const LobbyScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center'}}>Lobby Screen</Text> 
      <Text style={{textAlign: 'center'}}>Where players all meet before host launches session</Text>
      <Text style={{textAlign: 'center'}}>Players can view config and chat, host sets config and launches game</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => alert('TODO')} 
        >
        <Text>Open Session</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Setup')} 
        >
        <Text>Setup</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Table')} 
        >
        <Text>Launch Game</Text>
      </TouchableOpacity>
    </View>
  );
};
 
export default LobbyScreen;
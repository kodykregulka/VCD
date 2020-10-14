import React from 'react';
import { View, Text,TouchableOpacity, StyleSheet } from 'react-native';
 
import styles from '../../style.js';
 
const ChatScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center'}}>Chat Screen</Text> 
    </View>
  );
};
 
export default ChatScreen;
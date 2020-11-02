import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
 
import styles from '../../style.js';
 
const JoinScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center'}}>Join Screen</Text>
      <TextInput
        style={styles.search_bar}
        placeholder="Search..."
        
      />
    </View>
  );
};
 
export default JoinScreen;
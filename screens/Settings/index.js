import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
 
import styles from '../../style.js';
 
const SettingsScreen = ({ navigation}) => { 
  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center'}}>Settings Screen</Text>
      <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('Start')}
        >
            <Text>Quit to Start Screen</Text>
        </TouchableOpacity>
    </View>
  );
};
 
export default SettingsScreen;
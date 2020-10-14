import React from 'react';
import { View, Text,TouchableOpacity, StyleSheet } from 'react-native';
import MicButton from '../../elements/mic_button'
import ChatButton from '../../elements/chat_button'
import SettingsButton from '../../elements/settings_button'
 
import styles from '../../style.js';
 
const TableScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <MicButton
        style={styles.mic_button}
      />
      <ChatButton 
        navigation={navigation}
        style={styles.chat_button}
      />
      <SettingsButton 
        navigation={navigation} 
        style={styles.settings_button}
      />
      
      <Text style={{textAlign: 'center'}}>Table Screen</Text> 
    </View>
  );
};
 
export default TableScreen;
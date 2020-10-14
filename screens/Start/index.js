import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
 
import styles from '../../style.js';
import SettingsButton from '../../elements/settings_button'
  
 
const StartScreen = ({ navigation}) => {
  return (
    <View style={styles.container}>
        <SettingsButton 
            navigation={navigation} 
            style={styles.settings_button}
        />
        <Text style={styles.title_text}>Virtual Card Deck</Text>
        <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('Join')}
        >
            <Text>Join</Text>
        </TouchableOpacity>
        <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('Host')}
        >
            <Text>Host</Text>
        </TouchableOpacity>
    </View>
  );
};
 
export default StartScreen;
import React from 'react';
import { View, Text, Animated,TouchableOpacity, StyleSheet } from 'react-native';
import MicButton from '../../elements/mic_button'
import ChatButton from '../../elements/chat_button'
import SettingsButton from '../../elements/settings_button'
import PlayingCard from '../../elements/playing_card'
import {HeartIcon, DiamondIcon, SpadeIcon, ClubIcon} from '../../elements/suit_icons'

import Draggable from 'react-native-draggable';
 
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
      
      <PlayingCard style={styles.card_red} text='4' icon={DiamondIcon} x={100} y={100}/>
      <PlayingCard style={styles.card_red} text='K' icon={HeartIcon}/>
      <PlayingCard style={styles.card_black} text='10' icon={SpadeIcon}/>
      <PlayingCard style={styles.card_black} text='J' icon={ClubIcon}/>
      
    </View>
  );
};
 
export default TableScreen;
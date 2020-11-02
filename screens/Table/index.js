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
      
      <PlayingCard style={styles.card_red} text='4' icon={DiamondIcon} faceup={false} x={150} y={300}/>
      <PlayingCard style={styles.card_red} text='K' icon={HeartIcon} faceup={false} x={150} y={300}/>
      <PlayingCard style={styles.card_black} text='10' icon={SpadeIcon} faceup={false} x={150} y={300}/>
      <PlayingCard style={styles.card_black} text='J' icon={ClubIcon} faceup={false} x={150} y={300}/>
      <PlayingCard style={styles.card_red} text='Q' icon={DiamondIcon} faceup={false} x={150} y={300}/>
      <PlayingCard style={styles.card_black} text='A' icon={SpadeIcon} faceup={false} x={150} y={300}/>
      <PlayingCard style={styles.card_red} text='2' icon={HeartIcon} faceup={false} x={150} y={300}/>
      <PlayingCard style={styles.card_black} text='3' icon={ClubIcon} faceup={false} x={150} y={300}/>
      
    </View>
  );
};
 
export default TableScreen;
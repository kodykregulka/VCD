import React from 'react';
import {TouchableOpacity, Image, View, Text } from 'react-native';

import Draggable from 'react-native-draggable';
 
import styles from '../style.js';

const PlayingCard = (props) => {
    return (
        <Draggable x={props.x} y={props.y}> 
            <View style={styles.card_shape}>
                <View style={{flex: 4, alignContent: 'flex-start', alignItems: 'center'}}>
                    <Text style={props.style}>{props.text} </Text>
                    <props.icon/> 
                </View>
                <View style={{flex: 1}}>

                </View>
                <View style={{flex: 4, alignContent: 'flex-end', alignItems: 'center', transform: [{rotate: '180deg'}]}}>
                    <Text style={props.style}>{props.text} </Text>
                    <props.icon/> 
                </View>
            </View>
        </Draggable> 
    );
};

export default PlayingCard;
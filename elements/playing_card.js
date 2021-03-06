import React, {useState} from 'react';
import {TouchableOpacity, Image, View, Text } from 'react-native';

import Draggable from 'react-native-draggable';
 
import styles from '../style.js';

const PlayingCard = (props) => {

    const dropCard = (x, y) => {
        //alert(x + " : " + y);

    };

    const [viewState, setView] = useState(props.faceup);
 
    return (
        <Draggable 
            x={props.x} y={props.y} 
            onShortPressRelease={() => setView(!viewState)}
            onDragRelease={(e) => dropCard(e.nativeEvent.pageX, e.nativeEvent.pageY)}
            > 
            {viewState  === true? (
                <View style={styles.card_front} >
                
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
            ) : ( 
                <View style={styles.card_back} >
                    <Text style={styles.card_logo}>Virtual Card Deck</Text>
                </View>
            )}
        </Draggable> 
    );
};

export default PlayingCard;
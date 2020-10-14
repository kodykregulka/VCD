import React from 'react';
import {TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MicButton = ({style = { margin: 10 }}) => {
    return (
        <TouchableOpacity 
            style = {style}
            onPress={() => alert('TODO')}
        >
            <Image
                source={require('../resources/mic_icon.png')} 
                style={{ width: 25, height: 25 }}
            />
        </TouchableOpacity>
    );
};

export default MicButton;
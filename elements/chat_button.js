import React from 'react';
import {TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ChatButton = ({ navigation = useNavigation(), style = { margin: 10 }}) => {
    return (
        <TouchableOpacity 
            style = {style}
            onPress={() => navigation.navigate('Chat')}
        >
            <Image
                source={require('../resources/chat_icon.png')} 
                style={{ width: 25, height: 25 }}
            />
        </TouchableOpacity>
    );
};

export default ChatButton;
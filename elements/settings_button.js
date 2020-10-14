import React from 'react';
import {TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SettingsButton = ({ navigation = useNavigation(), style = { margin: 10 }}) => {
    return (
        <TouchableOpacity 
            style = {style}
            onPress={() => navigation.navigate('Settings')}
        >
            <Image
                source={require('../resources/settings_gear.png')} 
                style={{ width: 25, height: 25 }}
            />
        </TouchableOpacity>
    );
};

export default SettingsButton;
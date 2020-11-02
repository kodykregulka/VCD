import React from 'react';
import {Image } from 'react-native';

export const HeartIcon = () => {
    return (
        <Image
            source={require('../resources/heart_icon.png')} 
            style={{ width: 25, height: 25, marginHorizontal: 10, resizeMode: "contain"}}
        />
    );
};
export const DiamondIcon = () => {
    return (
        <Image
            source={require('../resources/diamond_icon.png')} 
            style={{ width: 25, height: 25, marginHorizontal: 10, resizeMode: "contain"}} 
        />
    );
};
export const SpadeIcon = () => {
    return (
        <Image
            source={require('../resources/spade_icon.png')} 
            style={{ width: 25, height: 25, marginHorizontal: 10, resizeMode: "contain"}} 
        />
    );
};
export const ClubIcon = () => {
    return (
        <Image
            source={require('../resources/club_icon.png')} 
            style={{ width: 25, height: 25, marginHorizontal: 10, resizeMode: "contain"}} 
        />
    );
};

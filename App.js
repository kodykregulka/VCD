import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View} from 'react-native';
 
import StartScreen from './screens/Start';
import JoinScreen from './screens/Join';
import HostScreen from './screens/Host';
import LobbyScreen from './screens/Lobby'
import SetupScreen from './screens/Setup';
import GameConfigurationsScreen from './screens/GameConfigurations'
import TableScreen from './screens/Table';
import ChatScreen from './screens/Chat';
import SettingsScreen from './screens/Settings';

import MicButton from './elements/mic_button'
import ChatButton from './elements/chat_button'
import SettingsButton from './elements/settings_button'


 
const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="Start"
        component={StartScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Join"
        component={JoinScreen}
        options={{
          headerShown: true,
          headerRight: () => (
            <SettingsButton />
          ),
        }}
      />
      <Stack.Screen 
        name="Host" 
        component={HostScreen} 
        options={{
          headerShown: true,
          headerRight: () => (
            <SettingsButton />
          ),
        }}
      />
      <Stack.Screen
        name="Lobby"
        component={LobbyScreen}
        options={{
          headerShown: true,
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
              <MicButton />
              <ChatButton />
              <SettingsButton />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Setup"
        component={SetupScreen}
        options={{
          headerShown: true,
          headerRight: () => (
            <SettingsButton />
          ),
        }}
      />
      <Stack.Screen
        name="Game Configurations"
        component={GameConfigurationsScreen}
        options={{
          headerShown: true,
          headerRight: () => (
            <SettingsButton />
          ),
        }}
      />
      <Stack.Screen
        name="Table"
        component={TableScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          headerShown: true,
          headerRight: () => (
            <SettingsButton />
          ),
        }}
      />
      <Stack.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
}
 

 
const App = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};
 
export default App;
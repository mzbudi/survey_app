import React, { Component } from 'react';
// import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'native-base';
import base from './src/public/utils/baseStyles';
import HomeScreen from './src/screen/HomeScreen';
import DisclaimerScreen from './src/screen/DisclaimerScreen';
import FormScreen from './src/screen/FormScreen';
import HorrorPict from './src/screen/HorrorPict';
import Charity from './src/screen/Charity';

const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();

const MenuScreen = () => {
  return (
    <Bottom.Navigator
      initialRouteName="Disclaimer"
      tabBarOptions={{
        activeTintColor: '#e91e63',
        activeBackgroundColor: '#c2b9a1',
        inactiveBackgroundColor: '#d9d0b8'
      }}>
      <Bottom.Screen
        name="Disclaimer"
        component={DisclaimerScreen}
        options={{
          tabBarLabel: 'Disclaimer',
          tabBarIcon: () => (
            <Icon type="AntDesign" name="pushpin" style={base.fontSettings} />
          )
        }}
      />
      <Bottom.Screen
        name="Form"
        component={FormScreen}
        options={{
          tabBarLabel: 'Form',
          tabBarIcon: () => (
            <Icon type="AntDesign" name="profile" style={base.fontSettings} />
          )
        }}
      />
      <Bottom.Screen
        name="Charity"
        component={Charity}
        options={{
          tabBarLabel: 'Charity',
          tabBarIcon: () => (
            <Icon type="AntDesign" name="profile" style={base.fontSettings} />
          )
        }}
      />
    </Bottom.Navigator>
  );
};

const MainScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Menu"
        component={MenuScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="After"
        component={HorrorPict}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <MainScreen />
      </NavigationContainer>
    );
  }
}

export default App;

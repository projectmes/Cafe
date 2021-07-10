import React, {useState} from 'react';
import {TouchableOpacity, StatusBar, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icons from 'react-native-vector-icons/Ionicons';
import Splash from './src/screen/Splash';
import Login from './src/screen/Login';
import Register from './src/screen/Register';
import Home from './src/screen/Home';
import Detail from './src/screen/Detail';
import Search from './src/screen/Search'
import Profile from './src/screen/Profile'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#C06014',
        style: {borderTopWidth: 1, elevation: 0, borderTopColor: '#f5f5f5'},
        keyboardHidesTabBar:true
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={navigation => ({
          tabBarIcon: ({color}) => (
            <Icons name="md-home-outline" color={color} size={24} />
          ),
        })}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={navigation => ({
          tabBarIcon: ({color}) => (
            <Icons name="search-outline" color={color} size={24} />
          ),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={navigation => ({
          tabBarIcon: ({color}) => (
            <Icons name="ios-person-outline" color={color} size={24} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

function DetailStack({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerStyle: {backgroundColor: '#C06014'},
          headerTintColor: '#f3f4ed',
          headerTitle: 'Detail Produk',
          headerRight: ({tintColor}) => (
            <Icons
              name="add"
              color={tintColor}
              size={34}
              style={{paddingRight: 10}}
              onPress={() => navigation.navigate('Pembayaran')}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Tab"
          component={TabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            headerStyle: {backgroundColor: '#C06014'},
            headerTintColor: '#f3f4ed',
            headerTitle: 'Detail Cafe',
          }}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerStyle: {backgroundColor: '#C06014'},
            headerTintColor: '#f3f4ed',
            headerTitle: 'Register',
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

import React,{useEffect} from 'react';
import {View, Text, Image, StatusBar} from 'react-native';

const Splash = ({navigation}) => {


    useEffect(()=>{
      setTimeout(()=>{
        navigation.replace('Tab')
      },3000)
    })

  return (
    <View style={{flex: 1,backgroundColor:'#F3F4ED'}}>
      <StatusBar
        backgroundColor="#C06014"
        animated
        showHideTransition={'fade'}
      />
      <View>
        <Image
          source={require('../assets/images/bg_splash.jpg')}
          style={{resizeMode: 'contain'}}
        />
      </View>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>

      <Text>Go to Cafe, refresh your mind...</Text>
      </View>
    </View>
  );
};
export default Splash;

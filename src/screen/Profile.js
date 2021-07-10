import React from 'react';
import {TouchableOpacity, View, Text, Image, StatusBar} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Profile = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff',justifyContent:'center',alignItems:'center'}}>
      <StatusBar
        backgroundColor="#C06014"
        animated
        showHideTransition={'fade'}
      />
      <View style={{width:'50%'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical:7,
          }}>
          <View>
            <Icons name="person" size={50} color="#C06014"  style={{textAlign:'center'}}/>
          </View>
          <View style={{width:120}}>
            <Text  style={{textAlign:'left',fontWeight:'bold',fontSize:16}}>Nama</Text>
            <Text  style={{textAlign:'left'}}>Agung Febrian</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical:7,
            
          }}>
          <View>
            <FontAwesome5 name="address-card" size={40} color="#C06014" style={{textAlign:'center'}}/>
          </View>
          <View style={{width:120}}>
            <Text  style={{textAlign:'left',fontWeight:'bold',fontSize:16}}>NPM</Text>
            <Text  style={{textAlign:'left'}}>175110022P</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical:7,
            
          }}>
          <View>
            <FontAwesome5 name="book-open" size={40} color="#C06014"  style={{textAlign:'center'}}/>
          </View>
          <View style={{width:120}}>
            <Text  style={{textAlign:'left',fontWeight:'bold',fontSize:16}}>Program Study</Text>
            <Text  style={{textAlign:'left'}}>S1-Informatika</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical:7,
            
          }}>
          <View>
            <FontAwesome name="bank" size={40} color="#C06014"  style={{textAlign:'center'}}/>
          </View>
          <View style={{width:120}}>
            <Text  style={{textAlign:'left',fontWeight:'bold',fontSize:16}}>Fakultas</Text>
            <Text  style={{textAlign:'left'}}>Komputer</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;

import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import {server, base_url} from './Func';
import Entypo from 'react-native-vector-icons/Entypo';

const Detail = ({route}) => {
  const directionMap = (lat, long) => {
    var url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${long}`;
    Linking.canOpenURL(url)
      .then(supported => {
        if (!supported) {
          console.log("Can't handle url: " + url);
        } else {
          return Linking.openURL(url);
        }
      })
      .catch(err => console.error('An error occurred', err));
  };

  return (
    <View style={{flex: 1, backgroundColor: '#f7f7f7'}}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1, paddingBottom: 80}}
        style={{flex: 1, backgroundColor: '#f7f7f7'}}>
        <View>
          <Image
            source={{uri: `${base_url()}assets/img/${route.params.data.photo}`}}
            style={{height: 250}}
          />
        </View>
        <View>
          <View
            style={{
              padding: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottomColor: '#e0e0e0',
              borderBottomWidth: 1,
            }}>
            <View style={{width: '70%'}}>
              <Text
                style={{fontSize: 20, color: '#536162', fontWeight: 'bold'}}>
                {route.params.data.nama_cafe} ( {route.params.data.jenis_cafe} )
              </Text>
              <Text
                style={{fontSize: 15, color: '#536162', fontWeight: 'bold'}}>
                {route.params.data.alamat_cafe}
              </Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Entypo
                name="clock"
                size={24}
                style={{textAlign: 'center', color: '#C06014'}}
              />
              <Text
                style={{fontSize: 15, color: '#C06014', fontWeight: 'bold'}}>
                {route.params.data.jam_operasional}
              </Text>
              <Text
                style={{fontSize: 15, color: '#C06014', fontWeight: 'bold'}}>
                {route.params.data.hari_operasional}
              </Text>
            </View>
          </View>
          <View>
            <View style={{padding: 15}}>
              <Text>Fasilitas</Text>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  width: '100%',
                  alignSelf: 'center',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}>
                {route.params.data.fasilitas1 ? (
                  <View style={{width: '25%'}}>
                    <Text>1. {route.params.data.fasilitas1}</Text>
                  </View>
                ) : null}
                 {route.params.data.fasilitas2 ? (
                  <View style={{width: '25%'}}>
                    <Text>2. {route.params.data.fasilitas2}</Text>
                  </View>
                ) : null}
                 {route.params.data.fasilitas3 ? (
                  <View style={{width: '25%'}}>
                    <Text>3. {route.params.data.fasilitas3}</Text>
                  </View>
                ) : null}
                 {route.params.data.fasilitas4 ? (
                  <View style={{width: '25%'}}>
                    <Text>4. {route.params.data.fasilitas4}</Text>
                  </View>
                ) : null}
                 {route.params.data.fasilitas5 ? (
                  <View style={{width: '25%'}}>
                    <Text>5. {route.params.data.fasilitas5}</Text>
                  </View>
                ) : null}
              </View>
            </View>
            <View
              style={{
                margin: 15,
                padding: 10,
                borderWidth: 1,
                borderColor: '#e0e0e0',
                borderRadius: 10,
              }}>
              <Text>{route.params.data.deskripsi}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{
          width: '90%',
          flexDirection: 'row',
          alignSelf: 'center',
          backgroundColor: '#C06014',
          padding: 10,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 15,
        }}
        onPress={() =>
          directionMap(route.params.data.latitude, route.params.data.longitude)
        }>
        <Entypo
          name="direction"
          size={20}
          color="#F3F4ED"
          style={{marginRight: 4}}
        />
        <Text style={{color: '#F3F4ED'}}>Petunjuk Arah</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Detail;

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  Linking
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import {server,base_url} from './Func';

const Home = ({navigation}) => {
  const [list, setList] = useState([]);
  const [trending,setTrending] = useState([]);

  const dataList = [
    {
      id_jual: 1,
      nama_cafe: 'Cafe A',
      jam_operasional: '16.00 - 00.00',
      alamat_cafe:'Jl. Cemara',
      lat : -5.484886042367886,
      long : 104.59837099660271
    },
    {
      id_jual: 2,
      nama_cafe: 'Cafe B',
      jam_operasional: '12.00 - 22.00',
      alamat_cafe:'Jl. Asri',
      lat : -5.484886042367886,
      long : 104.59837099660271
    },
    {
      id_jual: 3,
      nama_cafe: 'Cafe C',
      jam_operasional: '15.00 - 00.00',
      alamat_cafe:'Jl. Medan',
      lat : -5.484886042367886,
      long : 104.59837099660271
    },
    {
      id_jual: 4,
      nama_cafe: 'Cafe D',
      jam_operasional: '08.00 - 22.00',
      alamat_cafe:'Jl. Cemara Asri',
      lat : -5.484886042367886,
      long : 104.59837099660271
    },
  ];

  useEffect(() => {
    fetch(`${server()}destinasi`)
      .then(res => res.json())
      .then(res => {
        setList(res.data);
      });
      fetch(`${server()}destinasi/trendingCafe`)
      .then(res => res.json())
      .then(res => {
        setTrending(res.data);
      });
  }, []);

  const directionMap =(lat,long)=>{

    var url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${long}`;
    Linking.canOpenURL(url).then(supported => {
        if (!supported) {
            console.log('Can\'t handle url: ' + url);
        } else {
            return Linking.openURL(url);
        }
    }).catch(err => console.error('An error occurred', err));
}

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          marginBottom: 10,
          padding: 8,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          elevation: 5,
        }}
        onPress={()=>navigation.navigate('Detail',{data:item})}
        activeOpacity={0.8}>
        <View style={{width: '100%', alignSelf: 'center'}}>
          {/* <Image
            source={{
              uri: `http://192.168.43.161:8000/image/produk/${item.image}`,
            }}
            style={{width: 140, height: 180,borderRadius:10,resizeMode:'cover',alignSelf:'center'}}
          /> */}
          <View
            style={{
              borderWidth: 1,
              borderColor: '#e0e0e0',
              height: 250,
              borderRadius: 4,
            }}>
            <Image
              source={{uri:`${base_url()}assets/img/${item.photo}`}}
              style={{height: 250, width: '100%'}}
            />
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View style={{padding: 10,width:'50%'}}>
              <Text
                style={{fontSize: 20, fontWeight: 'bold', color: '#536162'}}>
                {item.nama_cafe}
              </Text>
              <Text
                style={{fontSize: 16, fontWeight: 'bold', color: '#536162'}}>
                {item.jam_operasional}
              </Text>
            </View>
            <View style={{width:'40%'}}>
              <TouchableOpacity style={{width:'100%',flexDirection:'row',alignSelf:'center',backgroundColor:'#C06014',padding:10,borderRadius:10,alignItems:'center',justifyContent:'center'}} onPress={()=>directionMap(item.latitude,item.longitude)}>
                <Entypo name="direction" size={20} color='#F3F4ED' style={{marginRight:4}}/> 
                <Text style={{color:'#F3F4ED'}}>Petunjuk Arah</Text>
              </TouchableOpacity>

            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderTrending = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          marginHorizontal: 7,
          marginVertical: 15,
          backgroundColor: '#fff',
          borderRadius:10,
          elevation:4
        }}
        onPress={()=>navigation.navigate('Detail',{data:item})}
        activeOpacity={0.8}>
        <View style={{width: '100%', alignSelf: 'center'}}>
          {/* <Image
            source={{
              uri: `http://192.168.43.161:8000/image/produk/${item.image}`,
            }}
            style={{width: 140, height: 180,borderRadius:10,resizeMode:'cover',alignSelf:'center'}}
          /> */}
          <ImageBackground
            source={{uri:`${base_url()}assets/img/${item.photo}`}}
            style={{width: 300, height: 140, borderRadius: 15}}
            imageStyle={{borderRadius: 10}}>
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,.3)',
                position: 'absolute',
                zIndex: 100,
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                borderRadius: 10,
                elevation: 0,
              }}></View>
            <View style={{padding: 10}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  zIndex: 120,
                  color: '#F3F4ED',
                }}>
                {item.nama_cafe}
              </Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#C06014"
        animated
        showHideTransition="fade"
        barStyle="light-content"
      />
      {list.length == 0 ? (
        <View>
          {/* <Image
            source={require('./assets/logo.png')}
            style={{width: '100%', height: 160, resizeMode: 'contain'}}
          /> */}
          <Text style={{color: '#28DF99'}}>Belum Ada Cafe</Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={{paddingVertical: 10}}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                color: '#536162',
                paddingLeft: 10,
              }}>
              Trending Cafe
            </Text>
            <FlatList
              data={trending}
              // style={{marginVertical: 10}}
              // contentContainerStyle={{flexGrow:1}}
              horizontal={true}
              renderItem={renderTrending}
              keyExtractor={item => item.id}
              scrollEnabled
            />
          </View>
          <FlatList
            data={list}
            // style={{flex:1}}
            // contentContainerStyle={{flexGrow:1}}

            renderItem={renderItem}
            keyExtractor={item => item.id}
            scrollEnabled
          />
        </ScrollView>
      )}
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
});

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
  Linking,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {server,base_url} from './Func';

const Search = ({navigation}) => {
  const [list, setList] = useState([]);
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState();

  const dataList = [
    {
      id_jual: 1,
      nama_cafe: 'Cafe A',
      jam_operasional: '16.00 - 00.00',
      alamat_cafe: 'Jl. Cemara',
      lat: -5.484886042367886,
      long: 104.59837099660271,
    },
    {
      id_jual: 2,
      nama_cafe: 'Cafe B',
      jam_operasional: '12.00 - 22.00',
      alamat_cafe: 'Jl. Asri',
      lat: -5.484886042367886,
      long: 104.59837099660271,
    },
    {
      id_jual: 3,
      nama_cafe: 'Cafe C',
      jam_operasional: '15.00 - 00.00',
      alamat_cafe: 'Jl. Medan',
      lat: -5.484886042367886,
      long: 104.59837099660271,
    },
    {
      id_jual: 4,
      nama_cafe: 'Cafe D',
      jam_operasional: '08.00 - 22.00',
      alamat_cafe: 'Jl. Cemara Asri',
      lat: -5.484886042367886,
      long: 104.59837099660271,
    },
  ];


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
        onPress={() => navigation.navigate('Detail', {data: item})}
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
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
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
            <View style={{width: '40%'}}>
              <TouchableOpacity
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  alignSelf: 'center',
                  backgroundColor: '#C06014',
                  padding: 10,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => directionMap(item.latitude, item.longitude)}>
                <Entypo
                  name="direction"
                  size={20}
                  color="#F3F4ED"
                  style={{marginRight: 4}}
                />
                <Text style={{color: '#F3F4ED'}}>Petunjuk Arah</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    fetch(`${server()}destinasi`)
      .then(res => res.json())
      .then(res => {
        setData(res.data);
      });
  }, []);

  const search = () => {
    if (searchText === '') {
      setList([]);
    } else {
      // const listSearch = data.filter(item =>
      //   item.nama_cafe.includes(searchText),
      // );
      // setList(listSearch);
      fetch(`${server()}destinasi/search`,{
        headers:{
          'Accept' : 'application/json',
          'Content-Type' : 'application/json'
        },
        method:'POST',
        body:JSON.stringify({nama_cafe : searchText})
      })
      .then(res => res.json())
      .then(res => {
        if(res.status){

          setList(res.data);
        } else {
        setList([]);

        }
      })
    }
  };

  return (
    <KeyboardAvoidingView style={{flex: 1, backgroundColor: '#f7f7f7'}}>
      <StatusBar
        backgroundColor="#C06014"
        animated
        showHideTransition="fade"
        barStyle="light-content"
      />
      <View
        style={{
          backgroundColor: '#C06014',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <TextInput
          placeholder="Search Cafe"
          onChangeText={value => setSearchText(value)}
          onSubmitEditing={search}
          style={{
            margin: 15,
            padding: 10,
            borderWidth: 1,
            borderColor: '#f7f7f7',
            borderRadius: 10,
            backgroundColor: '#f7f7f7',
            color: '#424642',
            width: '80%',
          }}
          placeholderTextColor="#424642"
        />
        <View style={{width: '20%'}}>
          <Icons
            name="search-outline"
            color={'#f7f7f7'}
            size={33}
            style={{
              alignSelf: 'center',
              borderWidth: 1,
              borderColor: '#f7f7f7',
              padding: 5,
              borderRadius: 10,
            }}
            onPress={search}
          />
        </View>
      </View>
      {list.length == 0 ? (
       null
      ) : (
        <FlatList
          data={list}
          // style={{flex:1}}
          // contentContainerStyle={{flexGrow:1}}

          renderItem={renderItem}
          keyExtractor={item => item.id_jual}
          scrollEnabled
        />
      )}
    </KeyboardAvoidingView>
  );
};
export default Search;

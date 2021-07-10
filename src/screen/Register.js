import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
  ToastAndroid,
} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Icons1 from 'react-native-vector-icons/MaterialCommunityIcons';

const Register = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(true);
  const [icon, setIcon] = useState('eye-outline');
  const [nama, setNama] = useState('');
  const [alamat, setAlamat] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [ktp, setKtp] = useState('');

  const daftar = () => {
    let data = {
      nama: nama,
      alamat: alamat,
      username: username,
      password: password,
      phone: phone,
      ktp: ktp,
    };


    fetch('http://192.168.43.161:8000/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(res => {
        if (res.status == 200) {
          ToastAndroid.show(
            'Daftar Berhasil, Silahkan Login',
            ToastAndroid.LONG,
          );
          navigation.replace('Login');
        } else {
          ToastAndroid.show('Daftar Gagal', ToastAndroid.SHORT);
        }
      });
  };

  const btnShowPassword = () => {
    setShowPassword(!showPassword);
    if (showPassword) {
      setIcon('eye-off-outline');
    } else {
      setIcon('eye-outline');
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar
        backgroundColor="#C06014"
        animated
        showHideTransition="fade"
        barStyle="light-content"
      />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '95%',
          backgroundColor: '#fff',
          padding: 15,
          alignSelf: 'center',
          borderRadius: 10,
          elevation: 3,
        }}>
        {/* <Image
          source={require('./assets/logo.png')}
          style={styles.imageLogin}
        /> */}
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: '#424642',
            textDecorationLine: 'underline',
          }}>
          DAFTAR
        </Text>
        <View
          style={{
            width: '100%',
            position: 'relative',
            padding: 15,
          }}>
          {/* <View style={styles.inputContainer}>
            <Icons
              name="person-outline"
              size={25}
              style={{marginRight: 5}}
              color="#e0e0e0"
            />
            <TextInput
              placeholder="Nama"
              placeholderTextColor="rgba(0,0,0,.4)"
              style={{width: '100%', color: '#536162'}}
              onChangeText={(value) => setNama(value)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Icons
              name="location-outline"
              size={25}
              style={{marginRight: 5}}
              color="#e0e0e0"
            />
            <TextInput
              placeholder="Alamat"
              placeholderTextColor="rgba(0,0,0,.4)"
              style={{width: '100%', color: '#536162'}}
              onChangeText={(value) => setAlamat(value)}
            />
          </View> */}
          {/* <View style={styles.inputContainer}>
            <Icons
              name="person-outline"
              size={25}
              style={{marginRight: 5}}
              color="#e0e0e0"
            />
            <TextInput
              placeholder="Username"
              placeholderTextColor="rgba(0,0,0,.4)"
              style={{width: '100%', color: '#536162'}}
              onChangeText={(value) => setUsername(value)}
            />
          </View> */}
          <View style={styles.inputContainer}>
            <Icons1
              name="email-outline"
              size={25}
              style={{marginRight: 5}}
              color="#e0e0e0"
            />
            <TextInput
              placeholder="e-Mail"
              placeholderTextColor="rgba(0,0,0,.4)"
              style={{width: '100%', color: '#536162'}}
              onChangeText={(value) => setKtp(value)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Icons
              name="lock-closed-outline"
              size={25}
              color="#e0e0e0"
              style={{marginRight: 5}}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry={showPassword}
              placeholderTextColor="rgba(0,0,0,.4)"
              style={{width: '75%', color: '#536162'}}
              onChangeText={(value) => setPassword(value)}
            />
            <Icons
              name={icon}
              onPress={btnShowPassword}
              size={25}
              color="#e0e0e0"
            />
          </View>
          {/* <View style={styles.inputContainer}>
            <Icons
              name="ios-call-outline"
              size={25}
              style={{marginRight: 5}}
              color="#e0e0e0"
            />
            <TextInput
              placeholder="No.Phone"
              placeholderTextColor="rgba(0,0,0,.4)"
              style={{width: '100%', color: '#536162'}}
              onChangeText={(value) => setPhone(value)}
            />
          </View> */}
          
        </View>
        <TouchableOpacity style={styles.btnLogin} onPress={daftar}>
          <Text style={styles.loginText}>Daftar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnLogin: {
    backgroundColor: '#C06014',
    padding: 10,
    marginVertical: 15,
    borderRadius: 10,
    width: '50%',
  },
  loginText: {
    color: '#F3F4ED',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  daftarText: {
    textDecorationLine: 'underline',
    color: '#0184ba',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginVertical: 7,
    borderRadius: 10,
    padding: 3,
  },
});

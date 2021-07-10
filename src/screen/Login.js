import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Icons1 from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [icon, setIcon] = useState('eye-outline');

  const btnShowPassword = () => {
    setShowPassword(!showPassword);
    if (showPassword) {
      setIcon('eye-off-outline');
    } else {
      setIcon('eye-outline');
    }
  };

  const login = () => {
    // let data = {
    //   username: username,
    //   password: password,
    // };
    // fetch('http://192.168.43.161:8000/user/login', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then(res => res.json())
    //   .then(res => {
    //     if (res.status == 200) {
          navigation.replace('Tab');
    //       let id_user = res.id_user
    //       AsyncStorage.setItem('id_user',id_user.toString())
    //     } else {
    //       ToastAndroid.show('Login Gagal', ToastAndroid.SHORT);
    //     }
    //   });
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#C06014"
        animated
        showHideTransition="fade"
        barStyle="light-content"
      />
      <ImageBackground source={require('../assets/images/bg_splash.jpg')} style={{width: '100%', height: '100%'}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: 200,
            zIndex: 200,
            width: '95%',
            backgroundColor: '#F3F4ED',
            padding: 15,
            alignSelf: 'center',
            borderRadius: 10,
            elevation: 3,
          }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: '#424642',
              textDecorationLine: 'underline',
            }}>
            LOGIN
          </Text>
          <View
            style={{
              width: '100%',
              position: 'relative',
              padding: 15,
            }}>
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
              onChangeText={(value) => setEmail(value)}
            />
          </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#e0e0e0',
                marginVertical: 7,
                borderRadius: 10,
                padding: 3,
              }}>
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
                onChangeText={value => setPassword(value)}
              />
              <Icons
                name={icon}
                onPress={btnShowPassword}
                size={25}
                color="#e0e0e0"
              />
            </View>
          </View>
          <Text style={{color: '#6E7C7C'}}>
            Tidak Memiliki Akun ?{' '}
            <Text
              style={styles.daftarText}
              onPress={() => navigation.navigate('Register')}>
              Daftar
            </Text>
          </Text>
          <TouchableOpacity style={styles.btnLogin} onPress={login}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginVertical: 7,
    borderRadius: 10,
    padding: 3,
  },
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  imageLogin: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
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
});

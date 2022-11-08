import {View, Text, Image, TextInput, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../common/CustomTextInput';
import CommonButton from '../common/CommonButton';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
let isValid = true;
const Signup = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [badName, setBadName] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [badConfirmPassword, setBadConfirmPassword] = useState(false);
  const [mobile, setMobile] = useState('');
  const [badMobile, setBadMobile] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const signupp = () => {
    setButtonDisabled(true);

    if (name == '') {
      setBadName(true);
      setButtonDisabled(false);
    } else {
      setBadName(false);
      if (email == '') {
        setBadEmail(true);
        setButtonDisabled(false);
      } else {
        setBadEmail(false);
        if (mobile == '') {
          setBadMobile(true);
          setButtonDisabled(false);
        } else if (mobile.length < 10) {
          setBadMobile(true);
          setButtonDisabled(false);
        } else {
          setBadMobile(false);
          if (password == '') {
            setBadPassword(true);
            setButtonDisabled(false);
          } else {
            setBadPassword(false);
            if (confirmPassword == '') {
              setBadConfirmPassword(true);
              setButtonDisabled(false);
            } else {
              setBadConfirmPassword(false);
              if (password !== confirmPassword) {
                setBadConfirmPassword(true);
                setButtonDisabled(false);
              } else {
                setBadConfirmPassword(false);
                saveData();
              }
            }
          }
        }
      }
    }
  };
  const saveData = async () => {
    await AsyncStorage.setItem('NAME', name);
    await AsyncStorage.setItem('EMAIL', email);
    await AsyncStorage.setItem('MOBILE', mobile);
    await AsyncStorage.setItem('PASSWORD', password);
    console.log(':yes');
    navigation.goBack();
  };
  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View style={{flex: 1}}>
        <Image
          source={require('../images/playstore.png')}
          style={{width: 60, height: 60, alignSelf: 'center', marginTop: 50}}
        />
        <Text
          style={{
            marginTop: 50,
            alignSelf: 'center',
            fontSize: 24,
            fontWeight: '600',
            color: '#000',
          }}>
          Create New Account
        </Text>
        <CustomTextInput
          placeholder={'Enter Name'}
          value={name}
          onChangeText={txt => {
            setName(txt);
          }}
          icon={require('../images/user.png')}
        />
        {badName === true && (
          <Text style={{marginTop: 10, marginLeft: 30, color: 'red'}}>
            Please Enter Namer
          </Text>
        )}
        <CustomTextInput
          placeholder={'Enter Email Id'}
          value={email}
          onChangeText={txt => {
            setEmail(txt);
          }}
          icon={require('../images/email.png')}
        />
        {badEmail === true && (
          <Text style={{marginTop: 10, marginLeft: 30, color: 'red'}}>
            Please Enter Email Id
          </Text>
        )}

        <CustomTextInput
          placeholder={'Enter Mobile'}
          value={mobile}
          keyboardType={'number-pad'}
          onChangeText={txt => {
            setMobile(txt);
          }}
          icon={require('../images/mobile.png')}
        />
        {badMobile === true && (
          <Text style={{marginTop: 10, marginLeft: 30, color: 'red'}}>
            Please Valid Mobile
          </Text>
        )}
        <CustomTextInput
          value={password}
          onChangeText={txt => {
            setPassword(txt);
          }}
          placeholder={'Enter Password'}
          icon={require('../images/lock.png')}
        />
        {badPassword === true && (
          <Text style={{marginTop: 10, marginLeft: 30, color: 'red'}}>
            Please Enter Password
          </Text>
        )}
        <CustomTextInput
          value={confirmPassword}
          onChangeText={txt => {
            setConfirmPassword(txt);
          }}
          placeholder={'Enter Confirm  Password'}
          icon={require('../images/lock.png')}
        />
        {badConfirmPassword === true && (
          <Text style={{marginTop: 10, marginLeft: 30, color: 'red'}}>
            Please Enter Correct Password
          </Text>
        )}
        <CommonButton
          title={'Sign Up'}
          bgColor={buttonDisabled ? '#8e8e8e' : '#000'}
          textColor={'#fff'}
          onPress={() => {
            signupp();
          }}
          disabled={buttonDisabled}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: '800',
            alignSelf: 'center',
            marginTop: 20,
            textDecorationLine: 'underline',
            marginBottom: 50,
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          Already have account?
        </Text>
      </View>
    </ScrollView>
  );
};

export default Signup;

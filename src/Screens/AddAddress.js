import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomTextInput from '../common/CustomTextInput';
import CommonButton from '../common/CommonButton';
import {useDispatch} from 'react-redux';
import {addAddress} from '../redux/actions/Actions';

const AddAddress = () => {
  const navigation = useNavigation();
  const [city, setCity] = useState('');
  const [building, setBuilding] = useState('');
  const [pin, setPin] = useState('');
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: 70,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            marginLeft: 20,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 0.2,
            padding: 7,
            borderRadius: 10,
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require('../images/back.png')}
            style={{width: 24, height: 24}}
          />
        </TouchableOpacity>
      </View>
      <CustomTextInput
        placeholder={'Enter City Name'}
        value={city}
        onChangeText={txt => {
          setCity(txt);
        }}
        icon={require('../images/buildings.png')}
      />
      <CustomTextInput
        placeholder={'Enter Building Name'}
        value={building}
        onChangeText={txt => {
          setBuilding(txt);
        }}
        icon={require('../images/building.png')}
      />
      <CustomTextInput
        placeholder={'Enter Pincode Name'}
        value={pin}
        keyboardType={'number-pad'}
        onChangeText={txt => {
          setPin(txt);
        }}
        icon={require('../images/pin.png')}
      />
      <CommonButton
        title={'Save Address'}
        bgColor={'#000'}
        textColor={'#fff'}
        onPress={() => {
          if (city !== '' && building !== '' && pin !== '') {
            dispatch(
              addAddress({city: city, building: building, pincode: pin}),
            );
            navigation.goBack();
          }
        }}
      />
    </View>
  );
};

export default AddAddress;

import {
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../common/CommonButton';
import RazorpayCheckout from 'react-native-razorpay';
import {useNavigation} from '@react-navigation/native';
import {addOrder} from '../redux/actions/Actions';
const Checkout = () => {
  const cartData = useSelector(state => state.Reducers);
  const addressList = useSelector(state => state.AddressReducers);
  const [selectedAddress, setSelectedAddress] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const getTotal = () => {
    let tempTotal = 0;
    cartData.map(item => {
      tempTotal = tempTotal + item.price;
    });
    return tempTotal;
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View>
          <FlatList
            data={cartData}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    width: '100%',
                    height: 70,
                    flexDirection: 'row',
                    marginTop: 10,
                  }}>
                  <Image
                    source={item.image}
                    style={{width: 70, height: 70, marginLeft: 10}}
                  />
                  <View style={{padding: 10}}>
                    <Text style={{fontSize: 18}}>{item.name}</Text>
                    <Text style={{marginTop: 10}}>{'रु ' + item.price}</Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: 30,
            borderTopWidth: 0.5,
            height: 50,
            borderTopColor: '#8e8e8e',
          }}>
          <Text>Total :</Text>
          <Text>{'रु ' + getTotal()}</Text>
        </View>
        <View>
          <FlatList
            data={addressList}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    width: '100%',

                    borderWidth: 0.2,
                    borderColor: '#8e8e8e',
                    alignSelf: 'center',

                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View>
                    <Text style={{marginLeft: 20}}>{'City: ' + item.city}</Text>
                    <Text style={{marginLeft: 20}}>
                      {'Building: ' + item.building}
                    </Text>
                    <Text style={{marginLeft: 20, marginBottom: 10}}>
                      {'Pincode: ' + item.pincode}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{borderWidth: 0.2, padding: 7, marginRight: 20}}
                    onPress={() => {
                      setSelectedAddress(
                        'City :' +
                          item.city +
                          ' ' +
                          ',Building: ' +
                          item.building +
                          ',Pincode: ' +
                          item.pincode,
                      );
                    }}>
                    <Text>Select address</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        <Text style={{margin: 20, fontSize: 18}}>Select Address</Text>
        <Text style={{marginLeft: 20, fontSize: 16}}>
          {selectedAddress == ''
            ? 'Please Select Address From Above List'
            : selectedAddress}
        </Text>
        <CustomButton
          bgColor={'#000'}
          textColor={'#fff'}
          title={'Place Order'}
          onPress={() => {
            var options = {
              description: 'Credits towards consultation',
              image:
                'https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg',
              currency: 'INR',
              key: 'rzp_test_0hE4fShT1FxgWO', // Your api key
              amount: '' + parseInt(getTotal() * 100) + '',
              name: 'foo',
              prefill: {
                email: 'engineercodewalaa@razorpay.com',
                contact: '1234567890',
                name: 'Razorpay Software',
              },
              theme: {color: '#000'},
            };
            RazorpayCheckout.open(options)
              .then(data => {
                // handle success
                alert(`Success: ${data.razorpay_payment_id}`);
                dispatch(
                  addOrder({
                    items: cartData,
                    total: getTotal(),
                    address: selectedAddress,
                  }),
                );
                navigation.navigate('OrderSuccess', {
                  status: 'success',
                });
              })
              .catch(error => {
                // handle failure
                navigation.navigate('OrderSuccess', {
                  status: 'failed',
                });
              });
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Checkout;

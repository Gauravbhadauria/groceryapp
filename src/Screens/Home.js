import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Loader from '../common/Loader';
import Main from '../bottom/Main';
import Search from '../bottom/Search';
import Cart from '../bottom/Cart';
import Wishlist from '../bottom/Wishlist';
import Profile from '../bottom/Profile';
import {useSelector} from 'react-redux';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const data = useSelector(state => state);

  return (
    <View style={{flex: 1}}>
      {selectedTab == 0 ? (
        <Main />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <Cart />
      ) : selectedTab == 3 ? (
        <Wishlist />
      ) : (
        <Profile />
      )}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          height: 70,
          flexDirection: 'row',
          backgroundColor: '#fff',
          elevation: 5,
        }}>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <Image
            source={require('../images/home.png')}
            style={{
              width: 24,
              height: 24,
              tintColor: selectedTab == 0 ? '#000' : '#8e8e8e',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(1);
          }}>
          <Image
            source={require('../images/search.png')}
            style={{
              width: 24,
              height: 24,
              tintColor: selectedTab == 1 ? '#000' : '#8e8e8e',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            backgroundColor: selectedTab == 2 ? 'green' : '#000',
            justifyContent: 'center',
            borderRadius: 25,
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(2);
          }}>
          <Image
            source={require('../images/bag.png')}
            style={{width: 24, height: 24, tintColor: '#fff'}}
          />
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor: 'red',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              top: 5,
              right: 5,
            }}>
            <Text style={{color: '#fff', fontWeight: '600'}}>
              {data.Reducers.length}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(3);
          }}>
          <Image
            source={require('../images/heart.png')}
            style={{
              width: 24,
              height: 24,
              tintColor: selectedTab == 3 ? '#000' : '#8e8e8e',
            }}
          />
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor: 'red',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              top: 15,
              right: 20,
            }}>
            <Text style={{color: '#fff', fontWeight: '600'}}>
              {data.Reducers2.length}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(4);
          }}>
          <Image
            source={require('../images/user.png')}
            style={{
              width: 24,
              height: 24,
              tintColor: selectedTab == 4 ? '#000' : '#8e8e8e',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

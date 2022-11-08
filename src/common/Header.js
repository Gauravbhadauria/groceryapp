import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View
      style={{
        width: '100%',
        height: 70,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 0.2,
        borderBottomColor: '#8e8e8e',
        backgroundColor:'#fff'
      }}>
      <Text
        style={{
          fontWeight: '600',
          fontSize: 20,
          color: '#000',
          marginLeft: 20,
        }}>
        GroceryApp
      </Text>

      <TouchableOpacity
        style={{
          marginRight: 20,
          justifyContent: 'center',
          alignItems: 'center',
          width: 50,
          height: 30,
        }}>
        <Text>Mode</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

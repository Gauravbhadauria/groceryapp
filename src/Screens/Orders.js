import {View, Text, SafeAreaView, FlatList, Image} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const Orders = () => {
  const orders = useSelector(state => state.OrderReducers);
  console.log(orders);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <FlatList
          data={orders}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  width: '100%',
                  borderWidth: 0.5,
                  justifyContent: 'center',
                  borderColor: '#8e8e8e',
                }}>
                {item.items.map(item1 => {
                  return (
                    <View
                      style={{
                        width: '100%',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={item1.image}
                        style={{
                          width: 50,
                          height: 50,
                          marginTop: 10,
                          marginLeft: 20,
                          marginBottom: 10,
                        }}
                      />
                      <Text style={{marginLeft: 20, fontSize: 18}}>
                        {item1.name}
                      </Text>
                      <Text style={{marginLeft: 20}}>
                        {'Total:' + 'xyz'}
                      </Text>
                    </View>
                  );
                })}
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Orders;

import {View, TouchableOpacity, Text, Image} from 'react-native';
import React from 'react';

const CartItem = ({
  item,
  onRemoveItem,
  onAddWishlist,
  onRemoveFromWishlist,
  isWishlist,
  onAddToCart,
}) => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 20,
        elevation: 5,
        width: '94%',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        backgroundColor: '#fff',
        marginBottom: 10,
      }}>
      <View style={{width: '100%'}}>
        <Image
          source={item.image}
          style={{
            width: '100%',
            height: 140,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        />

        <Text
          style={{
            marginTop: 10,
            marginLeft: 10,
            fontSize: 18,
            fontWeight: '600',
          }}>
          {item.name}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Text
            style={{
              marginTop: 5,
              marginLeft: 10,
              fontSize: 18,
              fontWeight: '600',
              marginBottom: 10,
            }}>
            {'रु ' + item.price}
          </Text>
          {isWishlist ? (
            <TouchableOpacity
              style={{
                borderWidth: 0.5,
                padding: 5,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                marginRight: 15,
              }}
              onPress={() => {
                onAddToCart(item);
              }}>
              <Text style={{color: '#000'}}>Add To Cart</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                borderWidth: 0.5,
                padding: 5,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                marginRight: 15,
              }}
              onPress={() => {
                onRemoveItem();
              }}>
              <Text style={{color: '#000'}}>Remove Item</Text>
            </TouchableOpacity>
          )}
        </View>
        {isWishlist ? (
          <TouchableOpacity
            style={{
              width: 40,
              elevation: 5,
              height: 40,
              backgroundColor: '#fff',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              top: 10,
              right: 10,
            }}
            onPress={() => {
              onRemoveFromWishlist();
            }}>
            <Image
              source={require('../images/heart_fill.png')}
              style={{width: 24, height: 24, tintColor: 'red'}}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              width: 40,
              elevation: 5,
              height: 40,
              backgroundColor: '#fff',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              top: 10,
              right: 10,
            }}
            onPress={() => {
              onAddWishlist(item);
            }}>
            <Image
              source={require('../images/heart.png')}
              style={{width: 24, height: 24}}
            />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CartItem;

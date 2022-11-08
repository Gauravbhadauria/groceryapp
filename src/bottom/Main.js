import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../common/Header';
import {products} from '../Products';
import ProductItem from '../common/ProductItem';
import {useDispatch, useSelector} from 'react-redux';
import {addItemToCart, addToWishlist} from '../redux/actions/Actions';

const Main = () => {
  const dispatch = useDispatch();
  const [categoryList, setCategoryList] = useState([]);
  const [tshirtList, setTshirtList] = useState([]);
  const [shoesList, setShoesLits] = useState([]);
  const [trouserList, setTrouserList] = useState([]);
  const [jeansList, setJeansList] = useState([]);
  const [shirtsList, setShirtsList] = useState([]);
  const [slipperList, setSlipperList] = useState([]);
  const [jacketLits, setJacketList] = useState([]);
  useEffect(() => {
    let categories = [];
    products.category.map(item => {
      categories.push(item.category);
    });
    setTshirtList(products.category[0].data);
    setJeansList(products.category[1].data);
    setShoesLits(products.category[2].data);
    setJacketList(products.category[3].data);
    setSlipperList(products.category[4].data);
    setTrouserList(products.category[5].data);
    setCategoryList(categories);
    console.log(JSON.stringify(products.category[0]));
  }, []);

  // const items = useSelector(state => state);
  // console.log(items);
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: 1}}>
        <Header />
        <Image
          source={require('../images/banner.jpeg')}
          style={{
            width: '94%',
            height: 200,
            alignSelf: 'center',
            borderRadius: 10,
            marginTop: 10,
          }}
        />
        <View style={{marginTop: 20}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categoryList}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    height: 40,
                    borderRadius: 20,
                    borderWidth: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 10,
                  }}>
                  <Text
                    style={{color: '#000', marginLeft: 10, marginRight: 10}}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            fontSize: 18,
            marginLeft: 20,
            fontWeight: '600',
            color: '#000',
          }}>
          New T-Shirts
        </Text>
        <View style={{marginTop: 15}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={tshirtList}
            renderItem={({item, index}) => {
              return (
                <ProductItem
                  item={item}
                  onAddWishlist={x => {
                    dispatch(addToWishlist(x));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item));
                  }}
                />
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            fontSize: 18,
            marginLeft: 20,
            fontWeight: '600',
            color: '#000',
          }}>
          New Trousers
        </Text>
        <View style={{marginTop: 15}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={trouserList}
            renderItem={({item, index}) => {
              return (
                <ProductItem
                  item={item}
                  onAddWishlist={x => {
                    dispatch(addToWishlist(x));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item));
                  }}
                />
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            fontSize: 18,
            marginLeft: 20,
            fontWeight: '600',
            color: '#000',
          }}>
          New Jeans
        </Text>
        <View style={{marginTop: 15}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={jeansList}
            renderItem={({item, index}) => {
              return (
                <ProductItem
                  item={item}
                  onAddWishlist={x => {
                    dispatch(addToWishlist(x));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item));
                  }}
                />
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            fontSize: 18,
            marginLeft: 20,
            fontWeight: '600',
            color: '#000',
          }}>
          New Slippers
        </Text>
        <View style={{marginTop: 15}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={slipperList}
            renderItem={({item, index}) => {
              return (
                <ProductItem
                  item={item}
                  onAddWishlist={x => {
                    dispatch(addToWishlist(x));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item));
                  }}
                />
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            fontSize: 18,
            marginLeft: 20,
            fontWeight: '600',
            color: '#000',
          }}>
          New Shoes
        </Text>
        <View style={{marginTop: 15, marginBottom: 100}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={shoesList}
            renderItem={({item, index}) => {
              return (
                <ProductItem
                  item={item}
                  onAddWishlist={x => {
                    dispatch(addToWishlist(x));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(x));
                  }}
                />
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Main;

import { Product, Size, Type, Img, Info, TimeDiv, Time } from './styles';
import { ActivityIndicator, Image, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Types from '../../pages/Types';

import React, { Component } from 'react';

class ProductCard extends Component {

  render() {
    console.tron.log(this.props);
    const { product, navigation } = this.props;

    return (
      <Product onPress={() => navigation.navigate('Types', { id: product.product_id })}>
        <Img source={{ uri: product.image_url }} />
        <Info>
          <Type>{product.name}</Type>
          <Size>{product.description}</Size>
          <TimeDiv>
            <Icon name="ios-timer" size={18} color="#900"/>
            <Time>30 min</Time>
          </TimeDiv>
        </Info>
      </Product>
    );
  }
}

export default ProductCard;

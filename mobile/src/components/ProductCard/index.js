import { Product, Size, Type, Img, Info, TimeDiv, Time } from './styles';
import { ActivityIndicator, Image, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

import React, { Component } from 'react';

class ProductCard extends Component {

  render() {
    const { product } = this.props;

    return (
      <Product>
        <Img source={{ uri: product.image_url }} />
        <Info>
          <Type>{product.name}</Type>
          <Size>{product.description}</Size>
          <TimeDiv>
            <Icon name="ios-timer" size={18} color="#900" />
            <Time>30 min</Time>
          </TimeDiv>
        </Info>
      </Product>
    );
  }
}

export default ProductCard;

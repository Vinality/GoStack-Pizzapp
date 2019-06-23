import { Product, Size, Type, Img, Info, Price, Delete } from './styles';
import { ActivityIndicator, Image, Text, View } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Creators as CartActions } from "../../store/ducks/cart";
import Icon from 'react-native-vector-icons/Ionicons';

import React, { Component } from 'react';

class CartCard extends Component {

  handleRemove = () => {
    const { removeOrderRequest, product } = this.props;
    removeOrderRequest(product.id);
  }

  render() {
    const { product } = this.props;

    return (
      <Product>
        <Img source={{ uri: product.type_url }} />
        <Info>
          <Type>{product.name}: {product.type}</Type>
          <Size>Tamanho: {product.size}</Size>
          <Price>R${product.price}</Price>
        </Info>
        <Delete>
          <Icon.Button
            name="ios-trash"
            size={30}
            color="#f40020"
            backgroundColor='transparent'
            onPress={this.handleRemove}
          />
        </Delete>
      </Product>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(CartCard);

import { Product, Size, Type, Img, Info, TimeDiv, Time } from './styles';
import { ActivityIndicator, Image, Text, View } from "react-native";
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import Types from '../../pages/Types';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Creators as ProductActions } from "../../store/ducks/products";

import React, { Component } from 'react';

class ProductCard extends Component {

  static propTypes = {
    product: PropTypes.shape({
      product_id: PropTypes.number,
      name: PropTypes.string,
      image_url: PropTypes.string,
      description: PropTypes.string,
    }).isRequired,

    productRequest: PropTypes.func.isRequired,
    productFailed: PropTypes.func.isRequired,
    productSuccess: PropTypes.func.isRequired,
    setCurrentProd: PropTypes.func.isRequired,

    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  }

  handleProductSelect = (id) => {
    const { setCurrentProd, navigation } = this.props;
    setCurrentProd(id);

    navigation.navigate('Types');
  }

  render() {
    const { product } = this.props;

    return (
      <Product onPress={() => this.handleProductSelect(product.product_id)}>
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(ProductActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(ProductCard);

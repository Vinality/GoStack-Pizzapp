import { Size, Img, Container, Price, FlexCont } from './styles';
import { ActivityIndicator, Image, Text, View } from "react-native";
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import { navigate } from "../../services/navigation";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Creators as CartActions } from "../../store/ducks/cart";

import React, { Component } from 'react';

class SizeCard extends Component {

  static propTypes = {
    sizes: PropTypes.shape({
      size_id: PropTypes.number,
      size: PropTypes.string,
      price: PropTypes.number,
      size_url: PropTypes.string,

      addOrderRequest: PropTypes.function,
      cartFailed: PropTypes.function,
      removeOrderRequest: PropTypes.function,
      endOrderRequest: PropTypes.function,
      endOrderSuccess: PropTypes.function,
      getCart: PropTypes.function,
      getCartSuccess: PropTypes.function,
    })
  }

  handleCartSubmit = () => {
    const { addOrderRequest, cartFailed, orders, size } = this.props;
    if(orders.length < 3) {
      addOrderRequest(size.size_id);
      navigate('Products');
    }
    else
      cartFailed();
  }

  render() {
    const { size } = this.props;

    return (
      <Container
        onPress={() => this.handleCartSubmit()}
      >
        <FlexCont>
          <Img source={{ uri: size.size_url }} />
        </FlexCont>
        <FlexCont>
          <Size>{size.size}</Size>
          <Price>R${size.price}</Price>
        </FlexCont>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.cart.orders,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SizeCard);

import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CartActions } from "../../store/ducks/cart";
import { navigate } from "../../services/navigation";
import CartCard from "../../components/CartCard";
import headerbg from '../../resources/headerbg.png';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  ProductList,
  Background,
  Title,
  Header,
  Button,
  ButtonText,
  ButtonContainer
} from "./styles";

class Cart extends Component {

  static propTypes = {
    cart: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        size: PropTypes.string,
        price: PropTypes.number,
        type_url: PropTypes.string,
        name: PropTypes.string,
        type: PropTypes.string
      })
    ).isRequired,

    addOrderRequest: PropTypes.function,
    cartFailed: PropTypes.function,
    removeOrderRequest: PropTypes.function,
    endOrderRequest: PropTypes.function,
    endOrderSuccess: PropTypes.function,
    getCart: PropTypes.function,
    getCartSuccess: PropTypes.function,

    total: PropTypes.number,
    error: PropTypes.bool,
    orders: PropTypes.arrayOf(PropTypes.number).isRequired
  }

  componentDidMount() {
    const { getCart, orders } = this.props;
    getCart(orders);
  }

  render() {
    const { cart, total, navigation, orders } = this.props;
    return (
      <Background source={headerbg}>
        <Header>
          <Icon.Button
            name="ios-arrow-back"
            size={20}
            color="#fff"
            backgroundColor='transparent'
            onPress={() => navigation.navigate('Products')}
          />
          <Title>Carrinho</Title>
          <Title>R${total}</Title>
        </Header>
        <ProductList>
          {cart && cart.map(product => (
            <CartCard product={product} />
          ))}
        </ProductList>
        {orders.length !== 0 &&
        <ButtonContainer>
          <Button >
            <ButtonText onPress={() => navigation.navigate('EndOrder')}>FINALIZAR PEDIDO</ButtonText>
          </Button>
        </ButtonContainer>
        }
      </Background>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.cart.orders,
  cart: state.cart.cart,
  total: state.cart.total
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

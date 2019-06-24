import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CartActions } from "../../store/ducks/cart";
import { navigate } from "../../services/navigation";
import CartCard from "../../components/CartCard";
import headerbg from '../../resources/headerbg.png';
import Icon from 'react-native-vector-icons/Ionicons';

import { Container, ProductList, Background, Title, Header, Empty, Button, ButtonText, ButtonContainer } from "./styles";

class Cart extends Component {

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
            <ButtonText>FINALIZAR PEDIDO</ButtonText>
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

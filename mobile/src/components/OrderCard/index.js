import { Container, Total, When, Number, Order } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { navigate } from "../../services/navigation";


import React, { Component } from 'react';

class TypeCard extends Component {

  render() {
    const { order } = this.props;

    return (
      <Container>
        <Order>
          <Number>Pedido #{order.order_id}</Number>
          <When>{order.when}</When>
          <Total>R${order.total}</Total>
        </Order>
      </Container>
    );
  }
}

export default TypeCard;

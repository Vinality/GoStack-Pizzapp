import { Container, Total, When, Number, Order } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import { navigate } from "../../services/navigation";
import moment from 'moment/min/moment-with-locales';
moment.locale('pt-br');

import React, { Component } from 'react';

class TypeCard extends Component {

  static propTypes = {
    orders: PropTypes.shape({
      order_id: PropTypes.number,
      total: PropTypes.number,
      when: PropTypes.string,
    })
  }

  render() {
    const { order } = this.props;
    const momento = moment(order.when);

    return (
      <Container>
        <Order>
          <Number>Pedido #{order.order_id}</Number>
          <When>{momento.startOf('day').fromNow()}</When>
          <Total>R${order.total}</Total>
        </Order>
      </Container>
    );
  }
}

export default TypeCard;

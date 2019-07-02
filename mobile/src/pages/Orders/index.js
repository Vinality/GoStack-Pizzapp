import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as OrderActions } from "../../store/ducks/order";
import OrderCard from "../../components/OrderCard";
import headerbg from '../../resources/headerbg.png';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  Container,
  Background,
  Title,
  Header,
  OrderList,
} from "./styles";

class Orders extends Component {

  static propTypes = {
    orders: PropTypes.arrayOf(
      PropTypes.shape({
        order_id: PropTypes.number,
        total: PropTypes.number,
        when: PropTypes.string,
      })
    ).isRequired,
    getOrderRequest: PropTypes.func.isRequired,
    orderSuccess: PropTypes.func.isRequired,
    orderFailed: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.getOrderRequest();
  }

  render() {
    const { orders, navigation } = this.props;

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
            <Title>Meus pedidos</Title>
          </Header>

            <OrderList>
            {orders && orders.map((order, i) => (
              <OrderCard order={order} key={i}/>
            ))}
            </OrderList>
      </Background>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.order.orders,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(OrderActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders);

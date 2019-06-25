import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as OrderActions } from "../../store/ducks/order";
import OrderCard from "../../components/OrderCard";
import headerbg from '../../resources/headerbg.png';
import Icon from 'react-native-vector-icons/Ionicons';

import { Container, Background, Title, Header, OrderList } from "./styles";

class Orders extends Component {
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
          {orders && orders.map(order => (
            <OrderCard order={order} />
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
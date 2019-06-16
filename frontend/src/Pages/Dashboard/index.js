import React, { Component } from 'react';
import logo from '../../resources/logo.svg';
import { Creators as OrderActions } from "../../store/ducks/order";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import { Container } from './styles';
import Header from '../../components/Header'
import OrderCard from '../../components/OrderCard'

class Dashboard extends Component {
  componentDidMount() {
    this.props.GetOrdersRequest();
  }

  render() {
    const { orders } = this.props.orders;
    console.tron.log(orders);
    return (
      <div>
        <Header />
        {orders && orders.map(order => (
          <OrderCard order={order} />
        ))}
      </div>
    );
  }

}

const mapStateToProps = state => ({
  orders: state.order,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...OrderActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

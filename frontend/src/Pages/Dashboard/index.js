import React, { Component } from 'react';
import { Creators as OrderActions } from "../../store/ducks/order";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, Orders } from './styles';
import Header from '../../components/Header'
import OrderCard from '../../components/OrderCard'
import PropTypes from 'prop-types';

class Dashboard extends Component {

  static propTypes = {
    GetOrdersRequest: PropTypes.func.isRequired,
    GetOrdersSuccess: PropTypes.func.isRequired,
    GetOrdersFailure: PropTypes.func.isRequired,

    orders: PropTypes.shape({
      when: PropTypes.instanceOf(Date),
      user: PropTypes.string,
      obs: PropTypes.string,
      total: PropTypes.number,
      address: PropTypes.string,
      products: PropTypes.arrayOf(
        PropTypes.shape({
          size: PropTypes.string,
          price: PropTypes.number,
          type: PropTypes.string,
          product: PropTypes.string,
          image_url: PropTypes.string
        })
      )
    }).isRequired
  }

  componentDidMount() {
    this.props.GetOrdersRequest();
  }

  render() {
    const { orders } = this.props.orders;

    return (
      <Container>
        <Header />
        <h1 className='pedidos'>Últimos Pedidos</h1>
        <Orders>
          {orders && orders.map((order, i) => (
            <OrderCard order={order} key={i}/>
          ))}
        </Orders>
      </Container>
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

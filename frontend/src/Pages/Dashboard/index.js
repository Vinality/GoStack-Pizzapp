import React, { Component } from 'react';
import logo from '../../resources/logo.svg';
import { Creators as OrderActions } from "../../store/ducks/order";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import { Container } from './styles';
import Header from '../../components/Header'

class Dashboard extends Component {
  componentDidMount() {
    this.props.GetOrdersRequest();
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }

}

const mapStateToProps = state => ({
  orders: state.order.orders,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...OrderActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

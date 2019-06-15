import React, { Component } from 'react';
import logo from '../../resources/logo.svg';
import { Creators as UsersActions } from "../../store/ducks/user";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container } from './styles';

class Header extends Component {

  render() {
    return (
      <Container>
        <img border="0" alt="logo" src={logo} />
        <h1>Pizzaria DonJuan</h1>
        <div>
          <h1 className='nome'>{this.props.name}</h1>
          <h1 className='logout'>Sair do App</h1>
        </div>
      </Container>
    );
  }

}

const mapStateToProps = state => ({
  name: state.user.name,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...UsersActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

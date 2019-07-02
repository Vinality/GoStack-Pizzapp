import React, { Component } from 'react';
import logo from '../../resources/logo.svg';
import { Creators as UsersActions } from "../../store/ducks/user";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container } from './styles';
import PropTypes from 'prop-types';

class Header extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    userLoginRequest: PropTypes.func.isRequired,
    userLoginSuccess: PropTypes.func.isRequired,
    userLoginFailure: PropTypes.func.isRequired,
    userLogout: PropTypes.func.isRequired,
  }

  handleLogout = () => {
    const { userLogout } = this.props;
    userLogout();
  }

  render() {
    const { name } = this.props;

    return (
      <Container>
        <img border="0" alt="logo" src={logo} />
        <h1>Pizzaria DonJuan</h1>
        <div>
          <h1 className='nome'>{name}</h1>
          <h1 className='logout' onClick={this.handleLogout}>Sair do App</h1>
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

import React, { Component } from "react";
import img from '../../resources/logo.svg';
import { Container, Form, Input, Logo, Button } from "./styles";
import { Creators as UsersActions } from "../../store/ducks/user";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from 'prop-types';

class Login extends Component {

  static propTypes = {
    userLoginRequest: PropTypes.func.isRequired,
    userLoginSuccess: PropTypes.func.isRequired,
    userLoginFailure: PropTypes.func.isRequired,
    userLogout: PropTypes.func.isRequired
  }

  state = {
    email: '',
    pass: ''
  }

  handleLogin = () => {
    const { userLoginRequest } = this.props;
    const { email, pass } = this.state;

    userLoginRequest(email, pass);
  }

  render() {
    return (
      <Container>
        <Form>
          <Logo src={img}/>
          <Input
            placeholder="Email"
            type="email"
            value={this.state.email}
            onChange={e => this.setState({email: e.target.value})}
          />
          <Input
            placeholder="Senha"
            type="password"
            value={this.state.pass}
            onChange={e => this.setState({pass: e.target.value})}
          />
        <Button type='submit' onClick={this.handleLogin}>Login</Button>
        </Form>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...UsersActions }, dispatch);

export default connect(null,
  mapDispatchToProps
)(Login);

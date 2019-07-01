import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { ActivityIndicator, Image, Text } from "react-native";
import { bindActionCreators } from "redux";
import { Creators as UserActions } from "../../store/ducks/user";
import { navigate } from "../../services/navigation";
import logo from '../../resources/logo.png';
import fundo from '../../resources/fundo.png';

import {
  Container,
  Input,
  Button,
  ButtonText,
  Error,
  Img,
  Background,
  TextSign
} from "./styles";

class Login extends Component {

  static propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.bool,

    loginRequest: PropTypes.func.isRequired,
    signupRequest: PropTypes.func.isRequired,
    signupSuccess: PropTypes.func.isRequired,
    userSuccess: PropTypes.func.isRequired,
    userFailed: PropTypes.func.isRequired
  }

  state = {
    username: '',
    password: ''
  };

  handleSubmit = async () => {
    const { username, password } = this.state;
    const { loginRequest } = this.props;

    loginRequest(username, password);
  };

  render() {
    const { username, password } = this.state;
    const { error, loading } = this.props;

    return (
      <Background source={fundo}>
        <Container>
          <Img source={logo} />
          {error && <Error>Usuário ou senha incorretos</Error>}
          <Input
            value={username}
            onChangeText={text => this.setState({ username: text })}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Seu e-mail"
          />
          <Input
            value={password}
            onChangeText={text => this.setState({ password: text })}
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Sua senha"
          />
          <Button onPress={this.handleSubmit}>
            {loading ? <ActivityIndicator size='small' color='#FFF' /> : <ButtonText>Entrar</ButtonText>}
          </Button>
          <TextSign onPress={() => navigate("Signup")}>Criar conta gratuita</TextSign>
        </Container>
      </Background>
    );
  }
}

const mapStateToProps = state => ({
  error: state.user.error,
  loading: state.user.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

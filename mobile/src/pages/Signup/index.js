import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { ActivityIndicator, Image } from "react-native";
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

class Signup extends Component {

  static propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.bool,
  }

  state = {
    name: '',
    email: '',
    password: ''
  };

  handleSubmit = async () => {
    const { name, password, email } = this.state;
    const { signupRequest } = this.props;

    signupRequest(name, email, password);
  };

  render() {
    const { email, password, name } = this.state;
    const { error, loading } = this.props;

    return (
      <Background source={fundo}>
        <Container>
          {error && <Error>Falha ao criar conta</Error>}
          <Img source={logo} />
          <Input
            value={name}
            onChangeText={text => this.setState({ name: text })}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Nome Completo"
          />
          <Input
            value={email}
            onChangeText={text => this.setState({ email: text })}
            autoCapitalize="none"
            autoCorrect={false}
            textContentType='emailAddress'
            placeholder="Seu e-mail"
          />
          <Input
            value={password}
            onChangeText={text => this.setState({ password: text })}
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Senha"
          />
          <Button onPress={this.handleSubmit}>
            {loading ? <ActivityIndicator size='small' color='#FFF' /> : <ButtonText>Criar conta</ButtonText>}
          </Button>
          <TextSign onPress={() => navigate("Login")}>Já possuo login</TextSign>
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
)(Signup);

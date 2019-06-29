import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CartActions } from "../../store/ducks/cart";
import { navigate } from "../../services/navigation";
import headerbg from '../../resources/headerbg.png';
import Icon from 'react-native-vector-icons/Ionicons';
import cepPromise from 'cep-promise';

import {
  Background,
  Title,
  Header,
  Button,
  ButtonText,
  ButtonContainer,
  FormContainer,
  Obs,
  InputLine,
  StreetContainer,
  Street,
  Number,
  Error,
  ErrorContainer
} from "./styles";

class EndOrder extends Component {

  static propTypes = {
    total: PropTypes.number.isRequired,
    orders: PropTypes.arrayOf(PropTypes.number).isRequired
  }

  state = {
    obs: '',
    cep: '',
    rua: '',
    bairro: '',
    num: '',
    error: null
  }

  handleCepPromise = async () => {
    var address;
    const { cep } = this.state;
    try {
      await cepPromise(cep).then(result => { address = result; });
      this.setState({ rua: address.street, bairro: address.neighborhood });
    } catch (error) {
      this.setState({error: 'Preencha o CEP corretamente'});
    }
  }

  handleEndOrder = () => {
    const { endOrderRequest, orders, total, navigation } = this.props;
    const { rua, num, bairro, obs } = this.state;

    if(rua === '' || num === '' || bairro === '') {
      this.setState({ error: 'Preencha todos os campos!'})
    }
    else {
      const address = rua + ", " + num + ", " + bairro;
      endOrderRequest(orders, address, total, obs);
      navigation.navigate('Products');
    }
  }

  render() {
    const { obs, cep, rua, cidade, bairro, num, error } = this.state;
    const { total, navigation } = this.props;
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
          <Title>Realizar Pedido</Title>
          <Title>R${total}</Title>
        </Header>

        <FormContainer>
          <Obs
            placeholder='Alguma observação?'
            value={obs}
            onChangeText={text => this.setState({ obs: text })}
          />
          <InputLine
            placeholder='Qual seu CEP?'
            value={cep}
            textContentType='postalCode'
            onBlur={this.handleCepPromise}
            onChangeText={text => this.setState({ cep: text })}
          />
          <StreetContainer>
            <Street
              placeholder='Rua'
              value={rua}
              onChangeText={text => this.setState({ rua: text })}
            />
            <Number
              placeholder='N°'
              value={num}
              onChangeText={text => this.setState({ num: text })}
            />
          </StreetContainer>
          <InputLine
            placeholder='Bairro'
            value={bairro}
            onChangeText={text => this.setState({ bairro: text })}
          />
        </FormContainer>

        <ButtonContainer>
          <Button onPress={this.handleEndOrder}>
            <ButtonText>FINALIZAR</ButtonText>
          </Button>
        </ButtonContainer>
        <ErrorContainer>
          {error && <Error>{error}</Error>}
        </ErrorContainer>
      </Background>
    );
  }
}

const mapStateToProps = state => ({
  total: state.cart.total,
  orders: state.cart.orders
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EndOrder);

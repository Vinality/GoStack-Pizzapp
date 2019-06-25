import React, { Component } from "react";
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
  Number
} from "./styles";

class EndOrder extends Component {
  state = {
    obs: '',
    cep: '',
    rua: '',
    cidade: '',
    bairro: '',
    num: '',
    error: null
  }

  handleCepPromise = async () => {
    var address;
    const { cep } = this.state;
    try {
      await cepPromise(cep).then(result => { address = result; });

      this.setState({ rua: address.street, cidade: address.city, bairro: address.neighborhood });
    } catch (err) {
      this.setState('Preencha o CEP corretamente');
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
          <Button>
            <ButtonText>FINALIZAR</ButtonText>
          </Button>
        </ButtonContainer>
      </Background>
    );
  }
}

const mapStateToProps = state => ({
  total: state.cart.total
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EndOrder);

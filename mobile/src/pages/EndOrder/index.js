import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CartActions } from "../../store/ducks/cart";
import { navigate } from "../../services/navigation";
import headerbg from '../../resources/headerbg.png';
import Icon from 'react-native-vector-icons/Ionicons';

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

  render() {
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
          <Obs placeholder='Alguma observação?'/>
          <InputLine placeholder='Qual seu CEP?'/>
          <StreetContainer>
            <Street placeholder='Rua'/>
            <Number placeholder='N°'/>
          </StreetContainer>
          <InputLine placeholder='Bairro'/>
        </FormContainer>

        <ButtonContainer>
          <Button >
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

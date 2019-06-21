import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, Image } from "react-native";
import { bindActionCreators } from "redux";
import { Creators as SizeActions } from "../../store/ducks/size";
import SizeCard from "../../components/SizeCard";
import headerbg from '../../resources/headerbg.png';
import Icon from 'react-native-vector-icons/Ionicons';

import { Container, Background, Title, Header, SizeList, Error } from "./styles";

class Sizes extends Component {

  componentDidMount() {
    const { navigation } = this.props;

    const id = navigation.getParam('id', 'no-id');
    this.props.sizeRequest(id);
  }

  render() {
    const { sizes, navigation, error } = this.props;
    const backid = navigation.getParam('back_id', 'no-id');
    return (
      <Background source={headerbg}>
        <Container>
          <Header>
            <Icon.Button
              name="ios-arrow-back"
              size={20}
              color="#fff"
              backgroundColor='transparent'
              onPress={() => navigation.navigate('Types', { back_id: backid })}
            />
            <Title>Selecione um tamanho</Title>
          </Header>
          <SizeList>
          {sizes && sizes.map(size => (
            <SizeCard size={size} key={size.id}/>
          ))}
          </SizeList>
          {error && <Error>Máximo de 3 items por pedido</Error>}
        </Container>
      </Background>
    );
  }
}

const mapStateToProps = state => ({
  error: state.cart.error,
  sizes: state.size.sizes,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(SizeActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sizes);

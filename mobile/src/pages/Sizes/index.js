import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Text, View, Image } from "react-native";
import { bindActionCreators } from "redux";
import { Creators as SizeActions } from "../../store/ducks/size";
import SizeCard from "../../components/SizeCard";
import headerbg from '../../resources/headerbg.png';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  Container,
  Background,
  Title,
  Header,
  SizeList,
  Error
} from "./styles";

class Sizes extends Component {

  static propTypes = {
    error: PropTypes.bool,
    sizes: PropTypes.arrayOf(
      PropTypes.shape({
        size_id: PropTypes.number,
        size: PropTypes.string,
        price: PropTypes.number,
        size_url: PropTypes.string
      })
    ).isRequired
  }

  componentDidMount() {
    const { navigation } = this.props;

    const id = navigation.getParam('id', 'no-id');
    this.props.sizeRequest(id);
  }

  render() {
    const { sizes, navigation, error } = this.props;
    return (
      <Background source={headerbg}>
        <Container>
          <Header>
            <Icon.Button
              name="ios-arrow-back"
              size={20}
              color="#fff"
              backgroundColor='transparent'
              onPress={() => navigation.navigate('Types')}
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

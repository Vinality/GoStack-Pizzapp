import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, Image } from "react-native";
import { bindActionCreators } from "redux";
import { Creators as TypeActions } from "../../store/ducks/type";
import TypeCard from "../../components/TypeCard";
import headerbg from '../../resources/headerbg.png';
import Icon from 'react-native-vector-icons/Ionicons';

import { Container, Background, Title, Header, TypeList } from "./styles";

class Types extends Component {
  componentDidMount() {
    const { navigation } = this.props;

    const id = navigation.getParam('id', 'no-id');
    this.props.typeRequest(id);
  }

  render() {
    const { types, navigation } = this.props;

    return (
      <Background source={headerbg}>
        <Container>
          <Header>
            <Icon name="ios-arrow-back" size={20} color="#fff" onIconClicked={navigation.goBack()} />
            <Title>Selecione um tipo</Title>
          </Header>
          <TypeList>
          {types && types.map(type => (
            <TypeCard type={type} key={type.id}/>
          ))}
          </TypeList>
        </Container>
      </Background>
    );
  }
}

const mapStateToProps = state => ({
  error: state.type.error,
  types: state.type.types,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TypeActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Types);

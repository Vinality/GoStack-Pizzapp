import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, Image, ActivityIndicator } from "react-native";
import { bindActionCreators } from "redux";
import { Creators as TypeActions } from "../../store/ducks/type";
import TypeCard from "../../components/TypeCard";
import headerbg from '../../resources/headerbg.png';
import Icon from 'react-native-vector-icons/Ionicons';

import { Container, Background, Title, Header, TypeList } from "./styles";

class Types extends Component {
  componentDidMount() {
    const { navigation } = this.props;
    const back_id = navigation.getParam('back_id', 'no-id');
    const id = navigation.getParam('id', 'no-id');

    if(id !== 'no-id')
      this.props.typeRequest(id);
    else
      this.props.typeRequest(back_id);
  }

  render() {
    const { types, navigation, loading } = this.props;
    const back_id = navigation.getParam('id', 'no-id');

    return (
      <Background source={headerbg}>
        {loading && <ActivityIndicator size="small" color="#00ff00" />}
        {!loading && <Container>
          <Header>
            <Icon.Button
              name="ios-arrow-back"
              size={20}
              color="#fff"
              backgroundColor='transparent'
              onPress={() => navigation.navigate('Products')}
            />
            <Title>Selecione um tipo</Title>
          </Header>
          <TypeList>
          {types && types.map(type => (
            <TypeCard type={type} key={type.id} product={back_id}/>
          ))}
          </TypeList>
        </Container>}
      </Background>
    );
  }
}

const mapStateToProps = state => ({
  error: state.type.error,
  types: state.type.types,
  loading: state.type.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TypeActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Types);

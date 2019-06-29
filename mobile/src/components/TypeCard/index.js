import { Type, Img, Container } from './styles';
import { ActivityIndicator, Image, Text, View } from "react-native";
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import { navigate } from "../../services/navigation";

import React, { Component } from 'react';

class TypeCard extends Component {

  static propTypes = {
    types: PropTypes.shape({
      type_id: PropTypes.number,
      type: PropTypes.string,
      image_url: PropTypes.string
    })
  }

  render() {
    const { type, product } = this.props;

    return (
      <Container onPress={() => navigate('Sizes', { id: type.type_id})}>
        <Img source={{ uri: type.image_url }} />
        <Type>{type.type}</Type>
      </Container>
    );
  }
}

export default TypeCard;

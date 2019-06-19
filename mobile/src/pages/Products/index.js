import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, Image } from "react-native";
import { bindActionCreators } from "redux";
import { Creators as ProductActions } from "../../store/ducks/products";
import { navigate } from "../../services/navigation";
import ProductCard from "../../components/ProductCard";
import headerbg from '../../resources/headerbg.png';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/AntDesign';

import { Container, ProductList, Background, Title, Header } from "./styles";

class Products extends Component {
  componentDidMount() {
    this.props.productRequest();
  }

  render() {
    const { products } = this.props;
    return (
      <Background source={headerbg}>
        <ProductList>
          <Header>
            <Icon name="back-in-time" size={25} color="#fff" />
            <Title>Pizzaria Don Juan</Title>
            <Icon2 name="shoppingcart" size={25} color="#fff" />
          </Header>
          {products && products.map(product => (
            <ProductCard product={product} key={product.id}/>
          ))}
        </ProductList>
      </Background>
    );
  }
}

const mapStateToProps = state => ({
  error: state.products.error,
  products: state.products.products,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ProductActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);

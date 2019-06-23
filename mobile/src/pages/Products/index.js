import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, Image, InteractionManager, ActivityIndicator } from "react-native";
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
    InteractionManager.runAfterInteractions(() => {
      this.props.productRequest();
    })
  }

  render() {
    const { products, navigation, loading } = this.props;
    return (
      <Background source={headerbg}>
        {loading && <ActivityIndicator size="small" color="#00ff00" />}
        {!loading && <ProductList>
          <Header>
            <Icon.Button
              name="back-in-time"
              size={25}
              color="#fff"
              backgroundColor='transparent'
              onPress={() => navigation.navigate('Cart')}
            />
            <Title>Pizzaria Don Juan</Title>
            <Icon2.Button
              name="shoppingcart"
              size={25} color="#fff"
              backgroundColor='transparent'
              onPress={() => navigation.navigate('Cart')}
            />
          </Header>
          {products && products.map(product => (
            <ProductCard product={product} key={product.id} navigation={navigation}/>
          ))}
        </ProductList>}
      </Background>
    );
  }
}

const mapStateToProps = state => ({
  error: state.products.error,
  products: state.products.products,
  loading: state.products.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ProductActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);

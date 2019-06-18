import { Container, Product, Title, Size, Type, Total, Img } from './styles';

import React, { Component } from 'react';

class OrderCard extends Component {

  render() {
    const { order } = this.props;
    var total = 0;

    return (
      <Container>
        <Title>{order.user} em {order.when}</Title>
        {order.products.map(prod => {
          if(prod.size) {
            total += prod.price;
            return(
              <Product>
                <Img src={prod.image_url}/>
                <div>
                  <Type>{prod.product} {prod.type}</Type>
                  <Size>{prod.size}: R${prod.price}</Size>
                </div>
              </Product>
            )
          }
        })}
        <Total>R${total}</Total>
      </Container>
    );
  }
}

export default OrderCard;

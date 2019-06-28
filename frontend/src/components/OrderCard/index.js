import { Container, Product, Title, Size, Type, Total, Img, When } from './styles';

import React, { Component } from 'react';
import moment from 'moment/min/moment-with-locales';
moment.locale('pt-br');

class OrderCard extends Component {

  render() {
    const { order } = this.props;
    const momento = moment(order.when);
    var total = 0;

    return (
      <Container>
        <Title>{order.user}</Title>
        <When>{momento.startOf('day').fromNow()}</When>
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

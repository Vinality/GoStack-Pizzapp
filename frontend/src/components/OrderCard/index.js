import {
  Container,
  Product,
  Title,
  Size,
  Type,
  Total,
  Img,
  When,
  Obs
} from './styles';
import React, { Component } from 'react';
import moment from 'moment/min/moment-with-locales';
moment.locale('pt-br');

class OrderCard extends Component {

  render() {
    const { order } = this.props;
    const momento = moment(order.when);

    return (
      <Container>
        <Title>{order.user}</Title>
        <When>{momento.startOf('day').fromNow()}</When>
        <Total>R${order.total}</Total>
        {order.products.map((prod, i) => (
          // if(prod.size) {
            // return(
            prod.size &&
              <Product key={i}>
                <Img src={prod.image_url}/>
                <div>
                  <Type>{prod.product} {prod.type}</Type>
                  <Size>{prod.size}: R${prod.price}</Size>
                </div>
              </Product>
            // )
          // }
        ))}
        <Obs>Observações: {order.obs}</Obs>
      </Container>
    );
  }
}

export default OrderCard;



import React from 'react';

const OrderCard = ({id, client, product, size, price, type, when}) => (
  <div>
    <h1>Pedido {id}</h1>
    <h1>{price}</h1>
    
  </div>
);

export default OrderCard;

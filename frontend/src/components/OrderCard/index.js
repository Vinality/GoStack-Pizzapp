import React from 'react';

const OrderCard = ({ order }) => (
  <div>
    <h1>{order.user} em {order.when}</h1>
    {order.products.map(prod => {
      if(prod.size)
        return(
          <div>
            <h1>{prod.product} {prod.type}</h1>
            <h2>{prod.size}: R$ {prod.price}</h2>
          </div>
        )
      }
    )}
  </div>
);

export default OrderCard;

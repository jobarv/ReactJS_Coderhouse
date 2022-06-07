import React from 'react';
import cart from '../../assets/img/cart-arrow-down-solid.svg';


const CartWidget = () => {
  return (
    <div className="cart-widget">
      <img src={cart} className="cartwidget" alt="cartwidget" />
      <div className="qty-display">0</div>
    </div>
  );
};

export default CartWidget;

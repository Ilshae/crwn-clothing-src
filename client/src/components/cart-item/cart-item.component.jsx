import React from 'react';
import { connect } from 'react-redux';

import {
  addItem,
  removeItem
} from '../../redux/cart/cart.actions';

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage
} from './cart-item.styles';

import {
  QuantityContainer,
} from '../checkout-item/checkout-item.styles';

const CartItem = ({ cartItem, addItem, removeItem  }) => {
  const { imageUrl, price, name, quantity } = cartItem
  return (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt='item' />
    <ItemDetailsContainer>
      <span>{name}</span>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <span>
        {quantity} x ${price}
      </span>

    </ItemDetailsContainer>
  </CartItemContainer>
);
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default React.memo(
  connect(
    null,
    mapDispatchToProps
  )(CartItem)
);

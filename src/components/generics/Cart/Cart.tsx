import { AiOutlineShoppingCart } from 'react-icons/ai';
import { sprintf } from 'sprintf-js';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React, { useContext } from 'react';

import { CartContext } from '../../../context/CartProvider';

import './Cart.scss';

const Cart = (): JSX.Element => {
  const { state } = useContext(CartContext);
  const { t } = useTranslation('layout');
  const quantity = state.cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link to="/cart" className="cart">
      <AiOutlineShoppingCart className="cart__icon" title={sprintf(t('cartTitle'), quantity)} />
      <span className="cart__text">{quantity}</span>
    </Link>
  );
};

export default Cart;

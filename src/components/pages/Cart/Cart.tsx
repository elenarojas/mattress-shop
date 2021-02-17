import React from 'react';
import { useTranslation } from 'react-i18next';

import useCart from './useCart';
import './Cart.scss';

const Cart = (): JSX.Element => {
  const { t } = useTranslation('cart');
  const { cartItems, onRemoveItem } = useCart();
  const isEmpty = cartItems.length === 0;
  let total = 0;

  const cartElements = cartItems.map(({ id, imageFileName, name, price, quantity }) => {
    const itemTotal = price * quantity;
    total += itemTotal;

    return (
      <li key={id} className="cart-item">
        <img src={`/images/${imageFileName}`} alt={name} />
        <div className="cart-item__content">
          <span className="cart-item__text">{name}</span>
          <span className="cart-item__quantity">{quantity}</span>
          <button type="button" onClick={() => onRemoveItem(id)}>
            {t('remove')}
          </button>
        </div>
        <span className="cart-item__price">${itemTotal}</span>
      </li>
    );
  });

  return (
    <div className="cart-page">
      <h1>{t('title')}</h1>
      {!isEmpty && <ul className="cart-items">{cartElements}</ul>}
      {!isEmpty && (
        <div className="total">
          <span>{t('totalAmount')}</span>
          <span>${total}</span>
        </div>
      )}
      {isEmpty && <span className="cart-items__empty">{t('empty')}</span>}
    </div>
  );
};

export default Cart;

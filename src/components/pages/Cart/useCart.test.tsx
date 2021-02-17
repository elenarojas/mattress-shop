import React from 'react';
import { act, renderHook, RenderResult } from '@testing-library/react-hooks';

import { CartContext } from '../../../context/CartProvider';
import useCart, { IUseCart } from './useCart';

const state = {
  cartItems: [
    {
      id: 'one',
      imageFileName: 'one.png',
      name: 'one',
      price: 123,
      reviewRating: 4.5,
      quantity: 10,
    },
    {
      id: 'two',
      imageFileName: 'two.png',
      name: 'two',
      price: 12,
      reviewRating: 3.5,
      quantity: 2,
    },
  ],
};

const dispatch = jest.fn();

describe('useCart hook', () => {
  let result: RenderResult<IUseCart>;

  beforeEach(() => {
    result = renderHook(() => useCart(), {
      wrapper: ({ children }: { children: React.ReactNode }) => (
        <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>
      ),
    }).result;
  });

  test('Gets 2 cart items', () => {
    expect(result.current.cartItems).toHaveLength(2);
  });

  test('Removes cart item', () => {
    act(() => {
      result.current.onRemoveItem('two');
    });
    expect(dispatch).toBeCalledWith({ payload: 'two', type: 'REMOVE' });
  });
});

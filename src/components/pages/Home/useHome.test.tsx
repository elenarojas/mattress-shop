import React from 'react';
import { act, renderHook, RenderResult } from '@testing-library/react-hooks';

import { CartContext } from '../../../context/CartProvider';
import useHome, { IUseHome } from './useHome';

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
  ],
};

const selectedItem = {
  id: 'zen',
  imageFileName: 'zen-carousel.jpg',
  name: 'Zenhaven',
  price: 1599,
  reviewRating: 4.5,
  quantity: 0,
};

const newItem = {
  id: 'classic',
  imageFileName: 'classic-carousel.jpg',
  name: 'Saatva Classic',
  price: 999,
  reviewRating: 4.9,
  quantity: 0,
};

const dispatch = jest.fn();

describe('useHome hook', () => {
  let result: RenderResult<IUseHome>;

  beforeEach(() => {
    result = renderHook(() => useHome(), {
      wrapper: ({ children }: { children: React.ReactNode }) => (
        <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>
      ),
    }).result;
  });

  test('Gets 3 mattresses', () => {
    expect(result.current.mattresses).toHaveLength(3);
  });

  test('Adds item to cart', () => {
    act(() => {
      result.current.onAddToCart();
    });
    expect(dispatch).toBeCalledWith({ payload: newItem, type: 'ADD' });
  });

  test('Selects a mattress', () => {
    act(() => {
      result.current.onSelectMattress('zen');
    });
    expect(result.current.selectedMattress).toEqual(selectedItem);
  });
});

import { useContext } from 'react';
import { CartContext } from '../../../context/CartProvider';

const useCart = (): IUseCart => {
  const {
    state: { cartItems },
    dispatch,
  } = useContext(CartContext);

  const handleRemove = (id: string) => {
    dispatch({
      type: 'REMOVE',
      payload: id,
    });
  };

  return {
    cartItems,
    onRemoveItem: handleRemove,
  };
};

export interface IUseCart {
  cartItems: IMattress[];
  onRemoveItem: (id: string) => void;
}

export default useCart;

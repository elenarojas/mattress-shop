import PropTypes from 'prop-types';
import React, { Dispatch, useReducer, useMemo, Reducer, ReactElement, ReactNode } from 'react';

const initialState = { cartItems: [] };

const reducer: Reducer<IState, ActionType> = (state: IState, action: ActionType): IState => {
  switch (action.type) {
    case 'ADD': {
      const { id: mattressId } = action.payload;
      const currentMattress = state.cartItems.find(({ id }) => id === mattressId);
      const newMattress = {
        ...action.payload,
        quantity: currentMattress ? currentMattress.quantity + 1 : 1,
      };

      return {
        cartItems: [...state.cartItems.filter(({ id }) => id !== mattressId), newMattress],
      };
    }
    case 'CLEAR':
      return initialState;
    case 'REMOVE':
      return {
        cartItems: state.cartItems.filter((item: IMattress) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

const sessionJSON = localStorage.getItem('cart');
const localState = sessionJSON ? JSON.parse(sessionJSON) : initialState;

export const CartContext = React.createContext<IContext>({ state: initialState, dispatch: () => null });

export const CartProvider = ({ children }: { children: ReactNode }): ReactElement => {
  const [state, dispatch] = useReducer(reducer, localState);

  useMemo(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * Types
 */

interface IState {
  cartItems: IMattress[];
}

interface IAdd {
  type: 'ADD';
  payload: IMattress;
}

interface IClear {
  type: 'CLEAR';
}

interface IRemove {
  type: 'REMOVE';
  payload: string;
}

type ActionType = IAdd | IClear | IRemove;

interface IContext {
  state: IState;
  dispatch: Dispatch<ActionType>;
}

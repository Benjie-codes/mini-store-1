import React, { createContext, useReducer, useContext } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const itemIndex = state.findIndex((product) => product.id === action.product.id);
      if (itemIndex > -1) {
        return state.map((product, index) =>
          index === itemIndex
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      }
      return [...state, { ...action.product, quantity: 1 }];
    case 'INCREMENT':
      return state.map((product) =>
        product.id === action.id
          ? { ...product, quantity: Math.min(product.quantity + 1, action.maxQuantity) }
          : product
      );
    case 'DECREMENT':
      return state.map((product) =>
        product.id === action.id
          ? { ...product, quantity: Math.max(product.quantity - 1, 1) }
          : product
      );
    case 'DELETE':
      return state.filter((product) => product.id !== action.id);
    case 'CLEAR':
      return [];
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

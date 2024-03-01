import { createContext, useState } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  const foundItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (!foundItem) return [...cartItems, { ...productToAdd, quantity: 1 }];

  return cartItems.map((cartItem) =>
    cartItem.id === productToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const values = { isCartOpen, setIsCartOpen, cartItems, addItemToCart };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

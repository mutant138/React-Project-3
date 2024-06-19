import React, { useState } from 'react';
import CartContext from './cart-context';


const CartProvider = props => {
  const [items, updateItems] = useState([])

  const addItemHandler = item => {
    updateItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(i => i.id === item.id);
      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += item.quantity;
        return updatedItems;
      } else {
        return [...prevItems, item];
      }
    });
  };

  const removeItemHandler = id => {
    updateItems(prevItems => prevItems.filter(item => item.id !== id));
  };
  const increaseItemQuantity = id =>{
      updateItems(prevItems =>{
        const existingItemIndex = prevItems.findIndex(i => i.id === id);
        const updatedItems = [...prevItems]
        updatedItems[existingItemIndex].quantity += 1
        return updatedItems
      })
  }
  const decreaseItemQuantity = id =>{
    updateItems(prevItems =>{
        const existingItemIndex = prevItems.findIndex(i => i.id === id);
        const updatedItems = [...prevItems]
        if (updatedItems[existingItemIndex].quantity > 1) {
            updatedItems[existingItemIndex].quantity -= 1;
          } else {
            updatedItems.splice(existingItemIndex, 1);
          }
        return updatedItems
      })
  }
  const cartContext = {
    items: items,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    increaseQuantity: increaseItemQuantity,
    decreaseQuantity: decreaseItemQuantity
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

import React, { useState, useEffect, createContext, useContext } from "react";

const CartContext = createContext();

export function UserProvider({ children }) {
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState([]);

  function addCart(item) {
      console.log(item)
    setItems((items) => [...items, item]);

    setTotal(total + item.price);
  }

  function removeCart(item) {
    if (total > 0) {
      const find = items.findIndex((element) => element.title === item.title);

      if (find !== -1) {
        items.splice(find, 1);

        setTotal(total - item.price);
      }
    }
  }

  function valuesCart() {
    return {
      total,
      items,
    };
  }

  return (
    <CartContext.Provider
      value={{
        total,
        addCart,
        removeCart,
        items,
        valuesCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function getValue() {
  const context = useContext(CartContext);
  const { total, addCart, removeCart, items, valuesCart } = context;

  return { total, addCart, removeCart, items, valuesCart };
}

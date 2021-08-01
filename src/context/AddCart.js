import React, { useState, useEffect, createContext, useContext } from "react";

const CartContext = createContext();

export function UserProvider({ children }) {
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState([]);
  const [countItems, setCountItems] = useState([]);

  useEffect(() => {
    items.map((item) => {
      const data = items.findIndex((element) => element.title === item.title);
      if (countItems.includes(data) === false) {
        setCountItems((countItems) => countItems.concat(data));
      }
    });
  }, [items]);

  function addCart(item) {
    setItems((items) => [...items, item]);

    setTotal(total + item.price);
  }

  function removeCart(item) {
    if (total >= 0) {
      const find = items.findIndex((element) => element.title === item.title);

      if (find !== -1) {
        const result = total.toFixed(2) - item.price;
        setTotal(result);

        countItems.splice(find, 1);
        items.splice(find, 1);
      }
    } else {
      setTotal(0);
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
        countItems,
        setTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function getValue() {
  const context = useContext(CartContext);
  const { total, addCart, removeCart, items, valuesCart, countItems } = context;

  return { total, addCart, removeCart, items, valuesCart, countItems };
}

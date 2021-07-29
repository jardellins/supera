import {useState, useEffect, createContext, useContext} from 'react'

const CartContext = createContext()

export function UserProvidor({children}) {
    const [checkout, setCheckout] = useState(0)

    const addCart = (price) => {
        setCheckout(checkout + price)
    }

    const removeCart = (price) => {
        setCheckout(checkout - price)
    }

    return (
        <CartContext.Provider
            value={{
                checkout,
                addCart,
                removeCart,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export function getValue() {
    const context = useContext(CartContext)

    return {context}
}
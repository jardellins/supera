import React, {useState, useEffect, createContext, useContext} from 'react'

const CartContext = createContext()

export function UserProvider({children}) {
    const [total, setTotal] = useState(0)
    const [items, setItems] = useState([])

    const addCart = (price, item) => {
        setTotal(total + price)
        setItems(items => [...items, item])
    }

    const removeCart = (price, item) => {
        setTotal(total - price)

        let data = []
        items.map((value, index) => {
            if(value !== item){
                data[index] = value
            }

            setItems(data)
        })
    }

    const valuesCart = () => {
        return {
            total,
            items
        }
    }

    return (
        <CartContext.Provider
            value={{
                total,
                addCart,
                removeCart,
                items,
                valuesCart
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
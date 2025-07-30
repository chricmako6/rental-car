"use client";
import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);

    const addToCart = (quantity = 1) => {
        setCartCount((prev) => prev + quantity);
    };

    const value = {
        cartCount,
        addToCart,
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);

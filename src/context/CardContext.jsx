import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, mySize, myColor) => {
        const selectedSize = mySize.find(size => size.classList.contains("addborder"));
        const selectedColor = myColor.find(color => color.classList.contains("addborder"));
        const isItemInCart = cart.find(cartItem => cartItem.id === item.id);

        if (selectedSize && selectedColor) {
            if (!isItemInCart) {
                setCart([...cart, { ...item, size: selectedSize.innerHTML, color: selectedColor.innerHTML, selectedQty: 1 }]);
            } else {
                alert("Already added in the cart");
            }
        } else {
            alert("Please select size and color");
        }
    };

    const handleQty = (num, id) => {
        const updatedCart = cart.map(item => item.id === id ? { ...item, selectedQty: num } : item);
        setCart(updatedCart);
    };

    const removeFromCart = id => {
        const newCart = cart.filter(cartItem => cartItem.id !== id);
        setCart(newCart);
    };

    const totalIndividualPrice = (price, qty) => price * qty;

    const totalProducts = () => cart.length;

    return (
        <CartContext.Provider value={{ addToCart, handleQty, removeFromCart, totalIndividualPrice, totalProducts, cart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};

import React, { useState, useEffect, useContext, createContext } from 'react';

const CartContext = createContext();

export const DataProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();

                setProducts(data.map(product => ({
                    ...product, 
                    sizes: ["S", "M", "L", "XL"],
                    color: ["WHITE", "BLACK"],
                    quantity: [1, 2, 3, 4, 5]
                })));

                setLoading(false);
            } catch (err) {
                console.error("Error fetching products:", err.message);
                setLoading(false);
            }
        };

        getData();
    }, []);

    return (
        <CartContext.Provider value={{ products, loading }}>
            {children}
        </CartContext.Provider>
    );
}

export const useData = () => {
    return useContext(CartContext);
}

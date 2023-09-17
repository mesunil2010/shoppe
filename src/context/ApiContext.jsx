import React, { createContext, useContext, useState, useEffect } from "react"

export const CartContext = createContext(null)

export const DataProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    useEffect(() => {
        try {
            const getData = async () => {
                setLoading(true)
                const data = await fetch("https://fakestoreapi.com/products")
                const response = data.json();
                return response
            }
            getData().then((product) => setProducts(product.map((product) =>
            ({
                ...product, sizes: ["S", "M", "L", "XL"],
                color: ["WHITE", "BLACK"],
                quantity: [1, 2, 3, 4, 5]
            }))))
            setLoading(false)
        }
        catch (err) {
            console.log(err.message)
        }
    }, [])
    console.log(products)
    console.log(loading)

    return (
        <CartContext.Provider value={{ products, loading }}>{children}</CartContext.Provider>
    )

}
export const useData = () => {
    return useContext(CartContext)
}

import React, {createContext, useContext, useState, useEffect} from "react"

export const CartContext = createContext(null)

export const CartProvider = ({children}) => {
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
            getData().then((product) => setProducts(product))
            setLoading(false)
        }
        catch (err) {
            console.log(err.message)
        }
    }, [])
    console.log(products)
    console.log(loading)
    
    return (
        <CartContext.Provider value ={{products,loading}}>{children}</CartContext.Provider>
    )

}
export const useCart = () => {
 return useContext(CartContext)
}

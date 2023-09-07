import React, { useEffect, useState } from "react"
import CartProduct from "./CartProduct"

const FetchData = () => {
    const [loading, setLoading] = useState(false)
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
    return (
        <>
            {loading ? null : products.map((product) => <CartProduct
                key={product.id}
                title={product.title}
                img={product.image} />)
            }
        </>
    )
}
export default FetchData
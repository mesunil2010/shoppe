import React, { useEffect, useState } from "react"
import CartProduct from "./CartProduct"

const FetchData = () => {
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
        <>
            <div className="container">
                <div className="row">
                    {loading ? "loading..." : products.map((product) => <CartProduct
                        key={product.id}
                        title={product.title}
                        img={product.image}
                        price={product.price} />)
                    }
                </div>
            </div>
        </>

    )
}
export default FetchData
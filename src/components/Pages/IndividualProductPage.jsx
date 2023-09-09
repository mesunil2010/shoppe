import React, { useRef } from "react"
import { useParams } from "react-router-dom"

import { useCart } from "../../context/CartProductContext"

import "./IndividualProductPage.css"

const IndividualProductPage = () => {
    const { id } = useParams()
    const { products } = useCart()
    const sizes = ["S", "M", "L", "XL"]
    const color = ["WHITE", "BLACK"]

    return (
        <>
         <div className="product">
            {products.map((product) => product.id === parseFloat(id) ?
                <div className="container">
                    <div className="d-flex jusitfy-content-center align-items-center gap-3"
                        style={{ height: "100%", width: "100%" }}>
                        <div className="image">
                            <img src={product.image} className="product-image"
                                alt={product.title} />
                        </div>
                        <div className="product-details" style={{width: "50%",padding: "10px"}}>
                            <div className="product-title"><h3>{product.title}</h3></div>
                            <div className="product-des"><p>{product.description}</p></div>
                            <h6>SELECT SIZE</h6>
                            <div className="btn-groups">
                                {sizes.map((size) => {
                                    return <div className="btn-size">{size}</div>
                                })}
                            </div>
                            <h6>SELECT COLOR</h6>
                            <div className="btn-groups">
                                {color.map((col) => {
                                    return <div className="btn-size">{col}</div>
                                })}
                            </div>
                            <h5>${product.price}</h5>
                            <button className="btn btn-lg btn-dark" style={{width: "100%"}}>ADD TO CART</button>
                        </div>
                    </div>
                </div>
                : null
            )}
            </div>
        </>
    )
}

export default IndividualProductPage
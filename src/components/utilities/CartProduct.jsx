import React from "react"

import "./CartProduct.css"

const CartProduct = ({ title, img, price }) => {
    return (
        <div className="col-lg-4 col-sm-6">
            <div className="card mb-3" style={{ boxSizing: "border-box", height: "400px" }}>
                <img src={img} className="card-img-top" style={{ height: "250px" }} />
                <div className="card-body d-flex justify-content-center align-items-center flex-column">
                    <div className="card-title">{title}</div>
                    <div className="card-text">${price}</div>
                </div>
            </div>
        </div>
    )

}
export default CartProduct
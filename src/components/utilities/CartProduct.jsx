import React from "react"

const CartProduct = ({ title, img }) => {
    return <div>
        <li>{title}</li>
        <img src={img} alt="image" />
    </div>

}
export default CartProduct
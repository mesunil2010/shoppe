import React from "react"
import { useCart } from "../../context/CardContext"
import NoCartItemPage from "./NoCartItemPage"
import SelectedItemPage from "./SelectedCartItem"

const CartPage = () => {
    const { card } = useCart()
    console.log(card)
    return (
        <>
            {card.length ? <SelectedItemPage /> : <NoCartItemPage />}
        </>
    )

}
export default CartPage
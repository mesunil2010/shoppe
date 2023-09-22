import React from "react"
import { useCart } from "../context/CardContext"
import NoCartItemPage from "./NoCartItemPage"
import SelectedItemPage from "./SelectedCartItem"

import {OuterLayout} from "./../layouts/OuterLayout"


const CartPage = () => {
    const { card } = useCart()
    console.log(card)
    return (
        <OuterLayout>
            {card.length ? <SelectedItemPage /> : <NoCartItemPage />}
        </OuterLayout>
    )

}
export default CartPage
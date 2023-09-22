import React from "react"
import { useCart } from "../context/CardContext"

import IndividualProductPage from "../components/IndividualProductPage"
import { OuterLayout } from "../layouts/OuterLayout"

const DisplayItem = () => {
    const {modal} = useCart()
    return (
    <OuterLayout>
    <div style={{position: "relative", backgroundColor: modal ? "grey" : ""}}>
        <IndividualProductPage />
    </div>
    </OuterLayout>
    )

}
export default DisplayItem
import React from "react"
import { useCart } from "../../context/CardContext"

import IndividualProductPage from "../utilities/IndividualProductPage"

const DisplayItem = () => {
    const {modal} = useCart()
    return <div style={{position: "relative", backgroundColor: modal ? "grey" : ""}}>
    <IndividualProductPage />
    </div>

}
export default DisplayItem
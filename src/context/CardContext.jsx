import React, { createContext, useContext, useState } from "react"

export const CardContext = createContext(null);

export const CardProvider = ({ children }) => {
    const [card, setCard] = useState([])
    const addToCart = (item, mySize, myColor) => {
        const selectedSize = mySize.find((size) => size.classList.contains("addborder"));
        const selectedColor = myColor.find((color) => color.classList.contains("addborder"));
        const isItemInCart = card.find((card) => card.id === item.id)
       
        if (selectedSize && selectedColor) {
            if (!isItemInCart) {
                 setCard([...card, { ...item, size: selectedSize.innerHTML, color: selectedColor.innerHTML, selectedQty: 1 }])
            }
            else {
               alert("already added in the cart")
        }
    }
      else {
        alert("please select size and color")
      }
}
        const handleQty = (num, id) => {
            const updatedCard = card.map((item) => {
                if (item.id === id) {
                    return { ...item, selectedQty: num }
                }
                else {
                    return item
                }

            })
            setCard(updatedCard)
        }

        const removeFromCart = (id) => {
            const newCard = card.filter((card) => card.id !== id)
            setCard(newCard)
        }

        const totalIndividualPrice = (price, qty) => {
            return price * qty
        }
        const totalProducts = () => {
            if (card.length > 0) {
                return card.length
            }
        }


        return <CardContext.Provider value={{ addToCart, handleQty, removeFromCart, totalIndividualPrice, totalProducts, card}}>{children}</CardContext.Provider>

    }
    export const useCart = () => {
        return useContext(CardContext)
    }

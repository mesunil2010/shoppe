import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import DisplayItem from "./pages/DisplayItem"
import LoginForm from "./pages/LoginForm"
import CartPage from "./pages/CartPage"

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />}>MY BAG</Route>
            <Route path="/cart/:id" element={<DisplayItem />} />
            <Route path="/login" element={<LoginForm />}>ACCOUNT</Route>
      </Routes>
    )
}
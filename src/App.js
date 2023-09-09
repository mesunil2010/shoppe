import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar.jsx"
import HomePage from "./components/Pages/HomePage.jsx";
import LoginForm from "./components/Pages/LoginForm.jsx";
import IndividualProductPage from "./components/Pages/IndividualProductPage"

import './App.css';
import { CartProvider } from "./context/CartProductContext.jsx";

function App() {
  return <>
  <CartProvider>
    <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/cart/:id" element={<IndividualProductPage />}>MY BAG</Route>
        <Route path="/login" element={<LoginForm />}>ACCOUNT</Route>
      </Routes>
      </CartProvider>
  </>
}

export default App;

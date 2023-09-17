import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar.jsx"
import HomePage from "./components/Pages/HomePage.jsx";
import LoginForm from "./components/Pages/LoginForm.jsx";
import IndividualproductPage from "./components/Pages/IndividualProductPage.jsx";
import { DataProvider } from "./context/ApiContext.jsx";
import CartPage from "./components/Pages/CartPage.jsx";
import { CardProvider } from "./context/CardContext.jsx";

import './App.css';

function App() {
  return <>
    <DataProvider>
      <CardProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />}>MY BAG</Route>
          <Route path="/cart/:id" element={<IndividualproductPage />} />
          <Route path="/login" element={<LoginForm />}>ACCOUNT</Route>
        </Routes>
      </CardProvider>
    </DataProvider>
  </>
}

export default App;

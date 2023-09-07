import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar.jsx"
import HomePage from "./components/Pages/HomePage.jsx";
import LoginForm from "./components/Pages/LoginForm.jsx";

import './App.css';

function App() {
  return <>
    <NavBar />
      <Routes>
        <Route path="/" element={<HomePage/>}>HOME</Route>
        <Route path="/login" element={<LoginForm />}>ACCOUNT</Route>
      </Routes>
  </>
}

export default App;

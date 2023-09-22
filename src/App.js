import { DataProvider } from "./context/ApiContext.jsx";
import { CartProvider } from "./context/CardContext.jsx";
import { AppRoutes } from "./routes.jsx";

import './App.css';

function App() {
  return <>
    <DataProvider>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </DataProvider>
  </>
}

export default App;

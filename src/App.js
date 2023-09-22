import { DataProvider } from "./context/ApiContext.jsx";
import { CardProvider } from "./context/CardContext.jsx";
import { AppRoutes } from "./routes.jsx";

import './App.css';

function App() {
  return <>
    <DataProvider>
      <CardProvider>
        <AppRoutes />
      </CardProvider>
    </DataProvider>
  </>
}

export default App;

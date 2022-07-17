import { Header } from "./components/Header";
import { Carrito } from "./components/Carrito";
import { DataProvider } from './context/DataProvider';
import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./components/Page";
import "boxicons";

function App() {

  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header />
          <Pages />
          <Carrito />
        </Router>
      </div>
    </DataProvider >
  );
}

export default App;

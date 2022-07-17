import { Header } from "./components/Header";
import { Carrito } from "./components/Carrito";
import { DataProvider } from './context/DataProvider';
import { BrowserRouter } from "react-router-dom";
import Pages from "./components/Page";
import "boxicons";

function App() {

  return (
    <DataProvider>
      {/* <div className="App"> */}
        <BrowserRouter>
          <Header />
          <Pages />
          <Carrito />
        </BrowserRouter>
      {/* </div> */}
    </DataProvider >
  );
}

export default App;

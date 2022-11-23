import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CurrencyEncyclopedia from "./Pages/CurrencyEncyclopedia/CurrencyEncyclopedia";
import CurrencyEncyclopediaDetail from "./Pages/CurrencyEncyclopediaDetail/CurrencyEncyclopediaDetail";
import Footer from '../src/Footer'
import NavComponent from '../src/NavComponent'
function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
        <NavComponent />
        <Routes>
          <Route path="/" element={<CurrencyEncyclopedia />} />

          <Route
            path="/currency-encyclopedia/:country"
            element={<CurrencyEncyclopediaDetail />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

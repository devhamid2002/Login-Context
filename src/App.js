import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Gallery from "./pages/gallery/Gallery";
import { createContext, useState } from "react";

const AppContext = createContext(null);
function App() {
  const [isLogin, setIsogin] = useState(false);
  return (
    <AppContext.Provider value={{ isLogin }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;

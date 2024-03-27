import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DigiPlus } from "./pages/digiplus";
import { Footer } from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DigiPlus />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

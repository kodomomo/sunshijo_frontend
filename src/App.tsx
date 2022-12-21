import React from "react";
import Main from "./pages/Main";
import GlobalStyle from "./styles/GlobalStyle";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import Main from "./pages/Main";
import Records from "./pages/Records";
import GlobalStyle from "./styles/GlobalStyle";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} /> 
        
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import Main from "./pages/Main";
import GlobalStyle from "./styles/GlobalStyle";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

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

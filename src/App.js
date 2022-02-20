import React from "react";
import Home from "./components/Home/Home";
import ActionLog from "./pages/ActionLog/ActionLog";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./style";
import Header from "./pages/Header/Header";

import { DeviceProvider } from "./context/DeviceContext";
import { ActionProvider } from "./context/ActionContext";

function App() {
  return (
    <ActionProvider>
      <DeviceProvider>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logs" element={<ActionLog />} />
        </Routes>
      </DeviceProvider>
    </ActionProvider>
  );
}

export default App;

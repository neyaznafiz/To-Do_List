import React from "react";
import { Route, Routes } from "react-router-dom";
import Focus from "./Pages/Focus";
import List from "./Pages/List";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<List/>} />
        <Route path="/focus" element={<Focus/>} />
      </Routes>
    </div>
  );
}

export default App;
